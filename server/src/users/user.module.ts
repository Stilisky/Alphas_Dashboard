/* eslint-disable prettier/prettier */
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { User, userSchema } from './schemas/user.schema';
import { WidgetModule } from 'src/widgets/widget.module';

@Module({
    imports: [WidgetModule,MongooseModule.forFeature([{ name: User.name, schema: userSchema }])],
    controllers: [],
    providers: [
        UserService,],
    exports: [
        UserService,
    ]
})
export class UserModule { }
