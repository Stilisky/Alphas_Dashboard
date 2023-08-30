/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { User } from "src/users/schemas/user.schema";
import { Widget } from "src/widgets/schemas/widget.schema";

export type TimerDocument = HydratedDocument<Timer>

@Schema()
export class Timer {
   @Prop({required: true})
   time: string

   @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],required: true})
   user: User

   @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'widget'}],required: true})
   widget: Widget
}

export const timerSchema = SchemaFactory.createForClass(Timer)