/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { User } from "src/users/schemas/user.schema";

export type ServiceDocument = HydratedDocument<Service>

@Schema()
export class Service {
   @Prop({required: true})
   name: string

   @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]})
   user: User

}

export const serviceSchema = SchemaFactory.createForClass(Service)