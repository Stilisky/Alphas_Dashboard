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
  Put,
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
      if(newUser){this.appService.userDefaultConfig(newUser._id.toHexString())}
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
      return user._id;
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

  @Post("/widgets")
  async createUserWidget(@Body() newWidget: WidgetCreateDto) {
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
  async getServices(@Res() res:Response) {
    const services = await this.serviceService.findServices()
    return res.json(services);
  }

  @Get("/services/user/:id")
  async userServices(@Param("id") id: string) {
    const user = await this.userService.findUserById(id)
    const services = await this.serviceService.findUserServices(user)
    return services;
  }


  @Get('/allusers')
  async getUsers() {
    const Allusers = await this.userService.findAllUsers()
    return Allusers;
  }

  @Post("/services")
  async createService(@Body() newServ) {
    const serv = await this.serviceService.createUserService(newServ)
    return serv;
  }

  @Get('/logout')
  async signout(@Session() session){
    session.destroy();
  }

  @Post("/users")
  async createUser(@Body() newServ) {
    const serv = await this.userService.createUser(newServ)
    return serv;
  }

  @Put('/promote/:userId')
  async promoteUser(@Param('userId') userId: string) {
    try {
      const updatedUser = await this.userService.toggleUserRole(userId);
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  @Delete('/users/:id')
  async deleteUser(@Param('id') id: string) {
    this.userService.deleteUser(id);
  }

  @Get("/widget/data/:id")
  async widgetdata(@Param("id") id:string) {
    const widget = await this.widgetService.findWidget(id);
    const data = await this.appService.getData(widget);
    return data;
  }

  @Get("/dashboard/:id")
  async dashboard(@Param("id") id:string) {
      const user = await this.userService.findUserById(id);
      const widgets = user.widgets
      // console.log(widgets)
      return widgets;
  }

  @Post("/widget/user/:id")
  async createWidgetForUser(@Param("id") userid:string, @Body() newWidget: WidgetCreateDto) {
    const widget = await this.appService.addWidgetToUser(userid, newWidget)
    return widget
  }

  @Get("/duplicate/widget/:widid/user/:userid")
  async duplicate(@Param("widid") widid: string, @Param("userid") userid: string) {
    this.appService.duplicateWidget(userid, widid);
    const user = await this.userService.findUserById(userid);
    const widgets = user.widgets
    return widgets;
  }

  @Get("/remove/widget/:widid/user/:userid")
  async removeWidget(@Param("widid") widid: string, @Param("userid") userid: string) {
    const user = await this.userService.removeWidget(userid,widid);
    const widgets = user.widgets
    return widgets;
  }

  @Get("/users/data/:id")
  async userData(@Param("id") id:string) {
    const userData = await this.userService.findUserById(id);
    return userData;
  }

  @Put('/update/users/data/:id')
  async updateAccountInfo(@Param('id') id: string, @Body() updateData) {
    const updateUser = this.userService.updateUser(id, updateData);
    return updateUser;
  }

}
