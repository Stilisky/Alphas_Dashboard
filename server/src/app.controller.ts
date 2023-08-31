import {
  Body,
  Controller,
  HttpException,
  Post,
  Res,
  Session,
} from '@nestjs/common';
import { CreateUserDto } from './users/dto/createUser.dto';
import { Response } from 'express';
import { UserService } from './users/user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

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
    }
  }

  @Post('/login')
  async loginUser(@Session() session, @Body() existingUser: CreateUserDto) {
    const { user } = await this.userService.validateUser(
      existingUser.email,
      existingUser.password,
    );

    if (user) {
      session['userId'] = user._id;
      session['name'] = user.username;
      session['email'] = user.email;
      return { user };
    }
  }
}
