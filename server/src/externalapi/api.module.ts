/* eslint-disable prettier/prettier */
import { HttpModule } from '@nestjs/axios';
import { ApiService } from './api.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [HttpModule],
    controllers: [],
    providers: [
        ApiService,],
    exports: [
        ApiService
    ]
})
export class ApiModule { }
