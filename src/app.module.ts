// The Module decorator is used to define a module in NestJS.
import { Module } from "@nestjs/common"
// The AppController is a controller responsible for handling incoming HTTP requests and returning responses.
import { AppController } from "./app.controller"
// The AppService is a service that contains business logic and is used by the controllers to perform various operations.
import { AppService } from "./app.service"
// The BookService is a service responsible for handling business logic related to books.
import { BookService } from "./book/book.service"
// The BookModule is a separate module that encapsulates the functionality related to books. It likely contains its own controllers, 
// services, and other providers specific to the book feature.
import { BookModule } from "./book/book.module"
// The ConfigModule is used to handle configuration and environment variables.
import { ConfigModule } from "@nestjs/config"
// The MongooseModule is used to interact with the MongoDB database using the Mongoose library.
import { MongooseModule } from "@nestjs/mongoose"

// This is the @Module() decorator, which is used to define the properties and configuration of the AppModule. 
@Module({
    //  It takes an object with the following properties:imports: An array of other modules that are imported and used by this module. 
    imports: [
        ConfigModule.forRoot({
            envFilePath: ".env",
            isGlobal: true,
        }),
        // MongooseModule.forRoot(process.env.DB_URI) sets up the Mongoose module and establishes a connection to the MongoDB 
        // database using the provided URI specified in the environment variable DB_URI.
        MongooseModule.forRoot(process.env.DB_URI),
        BookModule,
    ],
    // An array of controller classes that are part of this module
    controllers: [AppController],
    // An array of provider classes that are part of this modul
    providers: [AppService, BookService],
})
export class AppModule {}
