/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Timer } from "src/timers/schemas/timer.schema";

export type WidgetDocument = HydratedDocument<Widget>

@Schema()
export class Widget {
   @Prop({required: true})
   name: string

   @Prop()
   param: []

   @Prop({required: true})
   description: string

   @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Timer'}]})
   timer: Timer
}

export const widgetSchema = SchemaFactory.createForClass(Widget)