/* eslint-disable prettier/prettier */
import { ServiceService } from './service.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [
        ServiceService,],
    exports: [
        ServiceService,
    ]
})
export class ServiceModule { }
