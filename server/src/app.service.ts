/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ApiService } from './externalapi/api.service';
import { Widget } from './widgets/schemas/widget.schema';

@Injectable()
export class AppService {
  constructor(private readonly apiService: ApiService) {}
    
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
}
