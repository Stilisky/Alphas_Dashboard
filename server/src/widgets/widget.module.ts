/* eslint-disable prettier/prettier */
import { MongooseModule } from '@nestjs/mongoose';
import { WidgetService } from './widget.service';
import { Module } from '@nestjs/common';
import { Widget, widgetSchema } from './schemas/widget.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Widget.name, schema: widgetSchema }])],
  controllers: [],
  providers: [WidgetService],
  exports: [WidgetService],
})
export class WidgetModule {}
