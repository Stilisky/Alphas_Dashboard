import { Body, Controller, Post, HttpStatus, Res } from '@nestjs/common';
import { CreateUserDto } from './users/dto/createUser.dto';
//import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { UserService } from './users/user.service';
import { User } from './users/schemas/user.schema';
//import { UserService } from './users/user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  /*   @Post('/register')
    async saveUser(@Body() newUser: CreateUserDto, @Res() res: Response) {
      try {
        const hashedPassword = await bcrypt.hash(newUser.password, 12);
        newUser.password = hashedPassword;
        await this.userService.createUser(newUser);
  
        //res.render('index.js');
      } catch (error) {
        const statusCode = error.getStatus
          ? error.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
        res
          .status(statusCode)
          .render('register.js', { errorMessage: error.message });
      }
    } */

  @Post('/register')
  async registerUser(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response,
  ): Promise<User> {
    try {
      return await this.userService.validateCreation(createUserDto);
    } catch (error) {
      const statusCode = error.getStatus
        ? error.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
      res
        .status(statusCode)
        .render('register.js', { errorMessage: error.message });
    }
  }
}
