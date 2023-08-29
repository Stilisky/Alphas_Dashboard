/* eslint-disable prettier/prettier */
import { TimerService } from './timer.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [
        TimerService,],
    exports: [
        TimerService
    ]
})
export class TimerModule { }
