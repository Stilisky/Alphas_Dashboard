/* eslint-disable prettier/prettier */
import { MongooseModule } from '@nestjs/mongoose';
import { TimerService } from './timer.service';
import { Module } from '@nestjs/common';
import { Timer, timerSchema } from './schemas/timer.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Timer.name, schema: timerSchema }])],
    controllers: [],
    providers: [
        TimerService,],
    exports: [
        TimerService
    ]
})
export class TimerModule { }
