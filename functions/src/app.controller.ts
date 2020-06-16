import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {FirebaseService} from "./services/firebase.service";

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private readonly firebaseService: FirebaseService
      ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/hello')
  getsome() {
    return 'Ezedin';
  }
  @Post('/messages')
  storeMessage(@Body() message) {
    return this.firebaseService.addMessages(message);
  }
}
