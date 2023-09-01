/* eslint-disable prettier/prettier */

import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
   constructor(@InjectModel(User.name) private readonly userModel : Model<User>) {}

   async findAllUsers() {
      return await this.userModel.find().exec()
   }

   async findUserById(id: string) {
      const user = (await (await this.userModel.findById(id).exec()).populate("services")).populate("widgets")
      return user
   }

//    async createUSer(newUser: CreateUserDto) {
//       const user = new this.userModel(newUser).save();
//       return user;
//    }

async toggleUserRole(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId);
    if (!user) {
        throw new NotFoundException('User not found');
    }

    user.isAdmin = !user.isAdmin; // Inverser le statut d'administrateur
    await user.save(); // Mettre à jour l'utilisateur dans la base de données
    return user;
}



   async updateUser(id:string, newUser: UpdateUserDto) {
      const user = await this.userModel.findByIdAndUpdate(id, newUser)
      return user;
   }

   async deleteUser(id: string) {
      return this.userModel.findByIdAndRemove(id);
   }

    async createUser(createUserDto: CreateUserDto) {
        const { password } = createUserDto;

        try {
            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser = new this.userModel({
                ...createUserDto,
                password: hashedPassword,
            });
            await newUser.save();
            return newUser;
        } catch (error) {
            throw new BadRequestException('User creation failed');
        }
    }

    async checkExistingUser(email: string, username: string) {
        const existingUser = await this.userModel
            .findOne({ $or: [{ username }, { email }] })
            .exec();
        if (existingUser) {
            if (existingUser.username === username) {
                throw new ConflictException('Username is already taken');
            }
            if (existingUser.email === email) {
                throw new ConflictException('Email is already taken');
            }
        }
    }

    async validateCreation(createUserDto: CreateUserDto) {
        const { email, username } = createUserDto;

        // Check email format using regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new BadRequestException(
                'Invalid email format. Please provide a valid email address.',
            );
        }
        // Check username format using regex (alphanumeric characters only)
        const usernameRegex = /^[a-zA-Z0-9\-']+$/;
        if (!usernameRegex.test(username)) {
            throw new BadRequestException(
                'Invalid username format. Use only alphanumeric characters.',
            );
        }

        await this.checkExistingUser(email, username);

        return await this.createUser(createUserDto);
    }
    async validateUser(email: string, password: string) {
            const user = await this.userModel.findOne({ email });

            if (!user) {
                throw new NotFoundException("Email doesn't exist !");
            }

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                return { user };
            } else {
                throw new NotFoundException('Wrong password !');
            }
    }
}
