import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { GreetingService } from 'src/greeting/greeting.service';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, GreetingService, LoggerService],
  exports: [UsersService],
})
export class UsersModule {}
