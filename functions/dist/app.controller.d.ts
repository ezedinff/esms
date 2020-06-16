import { AppService } from './app.service';
import { FirebaseService } from "./services/firebase.service";
export declare class AppController {
    private readonly appService;
    private readonly firebaseService;
    constructor(appService: AppService, firebaseService: FirebaseService);
    getHello(): string;
    getsome(): string;
    storeMessage(message: any): any;
}
