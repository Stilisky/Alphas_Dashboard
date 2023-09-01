/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type WidgetDocument = HydratedDocument<Widget>

@Schema()
export class Widget {
   @Prop({required: true})
   name: string

   @Prop()
   param: []

   @Prop()
   description: string

   @Prop({default: "3"})
   timer: string
}

export const widgetSchema = SchemaFactory.createForClass(Widget)