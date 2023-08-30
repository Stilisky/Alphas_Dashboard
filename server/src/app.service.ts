import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  /*   async createUser(createUserDto: CreateUserDto) {
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
        // Handle hashing error or database operation error here
        throw new BadRequestException('User creation failed');
      }
    }
  
    async checkExistingUser(email: string, username: string) {
      const existingUser = await this.userModel
        .findOne({ $or: [{ email }, { username }] })
        .exec();
      if (existingUser) {
        if (existingUser.email === email) {
          throw new ConflictException('Email is already taken');
        }
        if (existingUser.username === username) {
          throw new ConflictException('Username is already taken');
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
      const usernameRegex = /^[a-zA-Z0-9]+$/;
      if (!usernameRegex.test(username)) {
        throw new BadRequestException(
          'Invalid username format. Use only alphanumeric characters.',
        );
      }
  
      await this.checkExistingUser(email, username);
  
      return await this.createUser(createUserDto);
    } */
}
