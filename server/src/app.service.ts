/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ApiService } from './externalapi/api.service';
import { Widget } from './widgets/schemas/widget.schema';
import { ServiceService } from './services/service.service';
import { WidgetService } from './widgets/widget.service';
import { UserService } from './users/user.service';
import { WidgetCreateDto } from './widgets/dto/createWidgetDto';
import { CreateServiceDto } from './services/dto/createServiceDto';

@Injectable()
export class AppService {
  constructor(
    private readonly apiService: ApiService,
    private readonly service: ServiceService,
    private readonly widgetService: WidgetService,
    private readonly userService: UserService,
  ) {}
    
  async getData(widget: Widget) {
    const name = widget.name;
    let data;
    switch (name) {
      case 'Country Info':
        data = await this.apiService.countryInfo()
        break;
      case 'Wealthy Info':
        data = await this.apiService.wealthyInfo()
        break;
      case 'Dad Jokes':
        data = await this.apiService.dadJokes()
        break;

      case 'Would You Rather':
        data = await this.apiService.woulduRather()
        break; 

      case 'Rates USD XOF':
        data = await this.apiService.latestRatesUSDXOF()
        break;
      
      case 'BTC Price':
        data = await this.apiService.latestBTCPrice()
        break;
      
      case 'Fives remotes jobs':
        data = await this.apiService.getLastFiveRemoteJobs()
        break;

      case 'Date and Times':
        data = await this.apiService.dateAndTime()
        break;
    }
    return data;
  }

  async addWidgetToUser(id: string, name:string) {
    const user = await this.userService.findUserById(id);
    const obj = new WidgetCreateDto();
    obj.name = name;
    const widget = await this.widgetService.createWidget(obj)
    user.widgets.push(widget)
    this.userService.updateUser(id, user)
  }

  async DeleteUserWidget(id: string, widid:string) {
    const user = await this.userService.findUserById(id);
    const widget = await this.widgetService.findWidget(widid);
    const widgets = user.widgets
    const newWidgets = [];
    widgets.forEach(element => {
      if(element != widget){
        newWidgets.push(element)
      }
    });
    user.widgets = newWidgets
    this.userService.updateUser(id, user)
  }

  async duplicateWidget(userid, widid) {
    const user = await this.userService.findUserById(userid);
    const wid = await this.widgetService.findWidget(widid);
    const obj = new WidgetCreateDto();
    obj.name = wid.name
    const widget = await this.widgetService.createWidget(obj);
    user.widgets.push(widget);
    this.userService.updateUser(userid, user)
  }

  async userDefaultConfig(userid: string) {
    const user = await this.userService.findUserById(userid);
    //First service 
    const obj = new WidgetCreateDto();
    obj.name = "Date and Times"
    const dateWidget = await this.widgetService.createWidget(obj);
    user.widgets.push(dateWidget);
    const servdto = new CreateServiceDto()
    servdto.name = "System"
    const serv1 = await this.service.createUserService(servdto)
    serv1.widgets.push(dateWidget);
    serv1.user = user;

    // Second Service
    const obja = new WidgetCreateDto();
    obja.name = "BTC Price"
    const btcwidget = await this.widgetService.createWidget(obja);
    user.widgets.push(btcwidget)
    const servdto1 = new CreateServiceDto()
    servdto1.name = "Finance"
    const serv2 = await this.service.createUserService(servdto1)
    serv2.widgets.push(btcwidget);
    serv2.user = user;

    // Third Service
    const objb = new WidgetCreateDto();
    objb.name = "Dad Jokes"
    const jokeWidget = await this.widgetService.createWidget(objb);
    user.widgets.push(jokeWidget);
    const servdto3 = new CreateServiceDto()
    servdto3.name = "Entertainement"
    const serv3 = await this.service.createUserService(servdto3)
    serv1.widgets.push(jokeWidget);
    serv3.user = user;

    this.userService.updateUser(userid, user)
  }
}
