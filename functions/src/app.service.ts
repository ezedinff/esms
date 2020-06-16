import { Injectable } from '@nestjs/common';
import {FirebaseService} from "./services/firebase.service";

@Injectable()
export class AppService {
  constructor(private firebaseService: FirebaseService) {}
  getHello(): string {
    return 'Hello World!';
  }
}
