// The Injectable decorator is used to mark the class as a NestJS injectable provider.
import { Injectable } from '@nestjs/common';
// The InjectModel decorator is used for injecting a Mongoose model into the service.
import { InjectModel } from '@nestjs/mongoose';
// Mongoose is the library used to interact with the MongoDB database in the NestJS application.
import * as mongoose from 'mongoose';
// It represents the Mongoose schema for the book collection in the database.
import { Book } from './schemas/book.schema';

// This is the class decorator that marks the BookService class as an injectable provider in NestJS.
@Injectable()
// This defines the BookService class, which is a NestJS service.
export class BookService {

    // This is the constructor of the BookService class. The constructor is used for dependency 
    // injection. The @InjectModel(Book.name) decorator is used to inject the Mongoose model for the 
    // Book schema into the bookModel property of the service.
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>  
    ) {}

    // This is an asynchronous method of the BookService class. It is a custom method that fetches all books 
    // from the MongoDB database using the Mongoose model bookModel.
    async findAll(): Promise<Book[]> {
        // Inside the findAll() method, it uses the Mongoose model bookModel to perform a find() query on the
        // MongoDB database. This query fetches all documents from the books collection.
        const books = await this.bookModel.find();
        // The method returns the fetched books as an array of Book objects.
        return books; 
    }  
}
