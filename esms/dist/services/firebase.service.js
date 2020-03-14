"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const fs = require("fs");
let FirebaseService = class FirebaseService {
    constructor() {
        require('firebase/firestore');
        try {
            this.init();
        }
        catch (e) {
            console.log('error');
            this.init();
        }
    }
    init() {
        admin.initializeApp({
            credential: admin.credential.cert(this.readKey()),
        });
        this.database = admin.firestore();
    }
    addSport(sport) {
        const sportDoc = this.database.collection('sports').doc(`${sport._id}`);
        return sportDoc.set(sport);
    }
    addRegion(region) {
        const regionDoc = this.database.collection('regions').doc(`${region._id}`);
        return regionDoc.set(region);
    }
    addCompetition(competition) {
        const competitionDoc = this.database.collection('competitions')
            .doc(`${competition._id}`);
        return competitionDoc.set(competition);
    }
    addEvent(event) {
        const eventDoc = this.database.collection('events')
            .doc(`${event._id}`);
        return eventDoc.set(event);
    }
    addOdd(odd) {
        const oddDoc = this.database.collection('odds')
            .doc(`${odd._id}`);
        return oddDoc.set(odd);
    }
    readKey() {
        return JSON.parse(fs.readFileSync('src/firebase.json').toString());
    }
};
FirebaseService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], FirebaseService);
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase.service.js.map