import { FirebaseService } from "./services/firebase.service";
export declare class AppService {
    private firebaseService;
    constructor(firebaseService: FirebaseService);
    getHello(): string;
}
