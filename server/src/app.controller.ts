/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiService } from './externalapi/api.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly apiService: ApiService
  ) {}

  @Get()
  async getHello() {
    return await this.apiService.getLastFiveRemoteJobs();
  }
}
