import { ApiModule } from './externalapi/api.module';
import { WidgetModule } from './widgets/widget.module';
import { ServiceModule } from './services/service.module';
import { TimerModule } from './timers/timer.module';
import { UserModule } from './users/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ApiModule,
    WidgetModule,
    ServiceModule,
    TimerModule,
    UserModule,
    MongooseModule.forRoot('mongodb://localhost/dashboard'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
