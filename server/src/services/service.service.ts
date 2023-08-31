/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Service } from './schemas/service.schema';
import { Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import { CreateServiceDto } from './dto/createServiceDto';
import { UpdateServiceDto } from './dto/updateServiceDto';
import { Widget } from 'src/widgets/schemas/widget.schema';

@Injectable()
export class ServiceService {
   constructor(@InjectModel(Service.name) private readonly serviceModel: Model<Service>) {}
   async findServices() {
      return await this.serviceModel.find().exec()
   }

   async findUserServices(user: User) {
      const services = await this.serviceModel.find().where('user', user).exec()
      return services;      
   }

   async createUserService(newservice: CreateServiceDto) {
      const service = new this.serviceModel(newservice).save()
      return service;
   }

   async findServiceWidgets(id: string) {
      const service = (await this.serviceModel.findById(id).exec()).populate("widgets")
      const widgets = await (await service).widgets
      return widgets
   }

   async addUserToService(id: string, user:User) {
      const service = await this.serviceModel.findById(id).exec()
      service.user = user
      this.serviceModel.findByIdAndUpdate(id, service)
   }

   async addWidgetToService(id: string, widget:Widget) {
      const service = await this.serviceModel.findById(id).exec()
      service.widgets.push(widget)
      this.serviceModel.findByIdAndUpdate(id, service)
   }

   async updateUserService(id: string, upServ: UpdateServiceDto) {
      const serv = this.serviceModel.findByIdAndUpdate(id, upServ)
      return serv;
   }

   async deleteService(id: string) {
      this.serviceModel.findByIdAndDelete(id)
   }
}
