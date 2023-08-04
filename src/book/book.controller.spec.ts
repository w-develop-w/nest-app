// These lines import the necessary testing utilities from the @nestjs/testing package. Test is used to create a 
// testing module, and TestingModule provides methods for compiling and creating testing modules.
import { Test, TestingModule } from '@nestjs/testing';
// These lines import the necessary testing utilities from the @nestjs/testing package. Test is used to create a 
// testing module, and TestingModule provides methods for compiling and creating testing modules.
import { BookController } from './book.controller';

describe('BookController', () => {
  let controller: BookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
    }).compile();

    controller = module.get<BookController>(BookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
