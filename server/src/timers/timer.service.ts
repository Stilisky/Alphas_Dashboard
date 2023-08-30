/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Timer } from './schemas/timer.schema';
import { Model } from 'mongoose';
import { UpdateTimerDto } from './dto/timerupdateDto';
import { CreateTimerDto } from './dto/timerCreateDto';
import { User } from 'src/users/schemas/user.schema';
import { Widget } from 'src/widgets/schemas/widget.schema';

@Injectable()
export class TimerService {
   constructor(@InjectModel(Timer.name) private readonly timerModel:Model<Timer>) {}

   async findUserTimer(user: User, widget: Widget) {
      const timer = (await (await this.timerModel.findOne({user}, {widget}).exec()).populate("user")).populate("widget")
      return timer;
   }
   
   async createTime (newTime: CreateTimerDto) {
      const timer = new this.timerModel(newTime).save()
      return timer
   }

   async updateTimer(id:string, upTimer: UpdateTimerDto) {
      const time = await this.timerModel.findByIdAndDelete(id,upTimer);
      return time;
   }

   async deleteTimer(id: string) {
      this.timerModel.findByIdAndRemove(id)
   }
}
