/* eslint-disable prettier/prettier */
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceService } from './service.service';
import { Module } from '@nestjs/common';
import { Service, serviceSchema } from './schemas/service.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Service.name, schema: serviceSchema }])],
    controllers: [],
    providers: [
        ServiceService,],
    exports: [
        ServiceService,
    ]
})
export class ServiceModule { }
