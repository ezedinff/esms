import { Injectable } from '@nestjs/common';
import {FirebaseService} from "./services/firebase.service";

@Injectable()
export class AppService {
  constructor(private firebaseService: FirebaseService) {}
  getHello(): string {
    this.firebaseService.addRegion({_id: 'England', name: 'England', order: 0, sport: 'soccer'})
        .then(() => console.log('created'))
        .catch(err => console.log(err));
    return 'Hello World!';
  }
}
