/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  HttpException,
  Post,
  Get,
  Res,
  Delete,
  Param,
  Session,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { ApiService } from './externalapi/api.service';
import { UserService } from './users/user.service';
import { WidgetService } from './widgets/widget.service';
import { TimerService } from './timers/timer.service';
import { ServiceService } from './services/service.service';
import { WidgetCreateDto } from './widgets/dto/createWidgetDto';
import { CreateUserDto } from './users/dto/createUser.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly apiService: ApiService,
    private readonly userService: UserService,
    private readonly widgetService: WidgetService,
    private readonly timerService: TimerService,
    private readonly serviceService: ServiceService,
  ) {}

  @Post('/register')
  async registerUser(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response,
  ) {
    try {
      const newUser = await this.userService.validateCreation(createUserDto);
      return res.json({ user: newUser })
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

  @Get()
  async getHello() {
    return await this.apiService.dateAndTime();
  }

  @Get("/widgets")
  async getWidgets() {
    return await this.widgetService.findWidgets();
  }

  @Post("/widgets")
  async createWidget(@Body() newWidget: WidgetCreateDto) {
    const widget = await this.widgetService.createWidget(newWidget);
    return widget
  }

  @Get('/widgets/:id')
  async findWidget(@Param('id') id: string) {
    const widget = await this.widgetService.findWidget(id);
    return widget
  }

  @Delete('/widgets/:id')
  async deleteWidget(@Param('id') id: string) {
    this.widgetService.deleteWidget(id)
  }

  @Get('/services')
  async getServices() {
    const services = await this.serviceService.findServices()
    return services;
  }

  @Get("/services/user/:id")
  async userServices(@Param("id") id: string) {
    const user = await this.userService.findUserById(id)
    const services = await this.serviceService.findUserServices(user)
    return services;
  }

  @Post("/services")
  async createService(@Body() newServ) {
    const serv = await this.serviceService.createUserService(newServ)
    return serv;
  }

  @Post("/users")
  async createUser(@Body() newServ) {
    const serv = await this.userService.createUser(newServ)
    return serv;
  }

  @Get("/widget/data/:id")
  async widgetdata(@Param("id") id:string) {
    const widget = await this.widgetService.findWidget(id);
    const data = await this.appService.getData(widget);
    return data;
  }

}
