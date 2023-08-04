import { Injectable } from '@nestjs/common';

// NestJS service class called AppService. Services in NestJS are responsible for containing the business logic 
// and handling various operations in the application.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
