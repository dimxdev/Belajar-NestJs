import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  sayHello(name: string) {
    return `Hello, ${name}! Welcome to NestJS!`;
  }
}
