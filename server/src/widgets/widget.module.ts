/* eslint-disable prettier/prettier */
import { WidgetService } from './widget.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [WidgetService],
  exports: [WidgetService],
})
export class WidgetModule {}
