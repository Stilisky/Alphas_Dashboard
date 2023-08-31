/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
   constructor(@InjectModel(User.name) private readonly userModel : Model<User>) {}

   async findAllUsers() {
      return await this.userModel.find().exec()
   }

   async findUserById(id: string) {
      const user = (await this.userModel.findById(id).exec()).populate("services")
      return user
   }

   async createUSer(newUser: CreateUserDto) {
      const user = new this.userModel(newUser).save();
      return user;
   }

   async updateUser(id:string, newUser: UpdateUserDto) {
      const user = await this.userModel.findByIdAndUpdate(id, newUser)
      return user;
   }

   async deleteUser(id: string) {
      return this.userModel.findByIdAndRemove(id);
   }
}
