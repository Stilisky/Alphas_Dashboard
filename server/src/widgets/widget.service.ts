/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Widget } from './schemas/widget.schema';
import { Model } from 'mongoose';
import { WidgetCreateDto } from './dto/createWidgetDto';

@Injectable()
export class WidgetService {
   constructor(@InjectModel(Widget.name) private readonly widgetModel: Model<Widget>) {}

   async findWidget(id) {
      const widget = (await this.widgetModel.findById(id).exec()).populate("timer")
      return widget
   }

   async createWidget(wid: WidgetCreateDto) {
      const widget = await new this.widgetModel(wid).save()
      return widget
   }

   async deleteWidget(id: string) {
      this.widgetModel.findByIdAndDelete(id);
   }
}
