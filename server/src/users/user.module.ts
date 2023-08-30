/* eslint-disable prettier/prettier */
import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './schemas/user.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: userSchema }])],
    controllers: [],
    providers: [
        UserService,],
    exports: [
        UserService,
    ]
})
export class UserModule { }
