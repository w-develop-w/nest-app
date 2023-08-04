// The Controller decorator is used to define a controller class.
import { Controller } from '@nestjs/common';

// This is a class decorator that marks the BookController class as a NestJS controller and specifies the 
// base route path for this controller as '/book'. The parameter 
@Controller('book')
// This defines the BookController class, which serves as a NestJS controller for handling book-related HTTP requests.
export class BookController {}
