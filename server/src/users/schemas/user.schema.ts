/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Service } from "src/services/schemas/service.schema";

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
   @Prop({required: true})
   username: string;
   
   @Prop({required: true})
   password: string;

   @Prop({required: true})
   email: string;

   @Prop({default: false})
   isAdmin: boolean 

   @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Service'}]})
   services: Service[]
}

export const userSchema = SchemaFactory.createForClass(User)