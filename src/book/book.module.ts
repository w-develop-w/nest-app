//  The Module decorator is used to define a NestJS module.
import { Module } from '@nestjs/common';

// This is a class decorator that marks the BookModule class as a NestJS module. The Module decorator takes an 
// options object as an argument, but in this case, the options object is empty ({}), indicating that the module 
// does not have any specific configuration or settings.
@Module({})
// This defines the BookModule class as a NestJS module. Inside this module, you can define and declare controllers, 
// services, and other providers that are specific to the "Book" feature of your application.
export class BookModule {}
