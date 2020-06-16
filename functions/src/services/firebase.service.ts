import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as fs from 'fs';
import * as firebase from 'firebase';
@Injectable()
export class FirebaseService {
  database;

  constructor() {
    require('firebase/firestore');

    try {
      this.init();
    } catch (e) {
      console.log('error');
      this.init();
    }
  }
  init() {
    admin.initializeApp({
      credential: admin.credential.cert(this.readKey()),
      databaseURL: "https://esms-d4ea1.firebaseio.com"
    });
    this.database = admin.firestore();
  }
  addMessages(message: {to: string, from: string, text: string}) {
    const messageDoc = this.database.collection('messages').doc();
    return messageDoc.set(message);
  }
  readKey() {
    return JSON.parse(fs.readFileSync('src/firebase.json').toString());
  }
}
