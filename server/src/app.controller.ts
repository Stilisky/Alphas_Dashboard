import { Body, Controller, HttpException, Post, Res } from '@nestjs/common';
import { CreateUserDto } from './users/dto/createUser.dto';
//import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { UserService } from './users/user.service';
//import { User } from './users/schemas/user.schema';
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
  ) {
    try {
      const newUser = await this.userService.validateCreation(createUserDto);
      return res.json({ user: newUser });
    } catch (error) {
      const errorMessage =
        error instanceof HttpException
          ? error.getResponse()
          : 'An error occurred';

      return res.status(error.getStatus()).json({ message: errorMessage });
      /* const statusCode = error.getStatus
        ? error.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
      res
        .status(statusCode)
        .render('register.js', { errorMessage: error.message }); */
    }
  }
}
