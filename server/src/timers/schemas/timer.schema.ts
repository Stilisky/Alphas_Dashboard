/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TimerDocument = HydratedDocument<Timer>

@Schema()
export class Timer {
   @Prop({required: true})
   time: string
}

export const timerSchema = SchemaFactory.createForClass(Timer)