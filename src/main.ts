// NestFactory is a core component of NestJS that allows us to create the Nest application instance.
import { NestFactory } from '@nestjs/core';
// The root module is the main module that orchestrates the application by importing other modules and 
// setting up the dependencies and providers.
import { AppModule } from './app.module';

// This is an asynchronous function named bootstrap, which is the main entry point of the application.
async function bootstrap() {
    // Inside the bootstrap function, it calls NestFactory.create() to create an instance of the Nest application. 
    // It takes the AppModule as an argument, indicating that AppModule is the root module of the application.
    const app = await NestFactory.create(AppModule);
    // After creating the Nest application instance, it calls the listen() method on the app instance to start the
    //  server and make it listen on port 3000. This means the server will start accepting incoming HTTP requests on port 3000.
    await app.listen(3000);
}
// The bootstrap() function is the entry point of the application, and when it is called, it begins the process of setting up
// the Nest application, including: creating the Nest application instance and starting the server: await app.listen(3000)
bootstrap();
