// The Controller decorator is used to define a controller class, and the Get decorator is used to specify that the 
// following method should handle HTTP GET requests.
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


// Controllers in NestJS are responsible for handling incoming HTTP requests, processing them, and returning responses.
@Controller()
// This is a class decorator that marks the AppController class as a NestJS controller. It defines the root path at which 
// this controller will handle incoming requests. Since no path is specified inside the decorator, the controller will handle 
// requests at the root path ('/').
export class AppController {
    // This is called dependency injection, where the AppService instance is automatically injected into the controller by NestJS.
    constructor(private readonly appService: AppService) {}

  // This is a method decorator that marks the getHello() method as the handler for HTTP GET requests. Since no specific path is 
  // specified inside the Get decorator, this method will handle GET requests at the root path ('/') of the controller.
  @Get()
  // This is the getHello() method of the AppController. It is called when a GET request is made to the root path ('/') of the 
  // controller. Inside this method, it calls the getHello() method of the AppService to retrieve the "Hello World!" string.
  getHello(): string {
    return this.appService.getHello();
  }
}
