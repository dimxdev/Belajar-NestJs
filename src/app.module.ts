import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GreetingService } from './greeting/greeting.service';
import { LoggerService } from './logger/logger.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, GreetingService, LoggerService],
})
export class AppModule {}
