export declare class FirebaseService {
    database: any;
    constructor();
    init(): void;
    addMessages(message: {
        to: string;
        from: string;
        text: string;
    }): any;
    readKey(): any;
}
