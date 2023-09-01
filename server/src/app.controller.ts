/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiService } from './externalapi/api.service';
import { UserService } from './users/user.service';
import { WidgetService } from './widgets/widget.service';
import { TimerService } from './timers/timer.service';
import { ServiceService } from './services/service.service';
import { WidgetCreateDto } from './widgets/dto/createWidgetDto';

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

  @Get()
  async getHello() {
    return await this.apiService.getLastFiveRemoteJobs();
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
    const serv = await this.userService.createUSer(newServ)
    return serv;
  }

  @Get("/widget/data/:id")
  async widgetdata(@Param("id") id:string) {
    const widget = await this.widgetService.findWidget(id);
    const data = await this.appService.getData(widget);
    return data;
  }
  
  
}
