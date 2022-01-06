import { Timestamp } from "rxjs";

export class Flight{
    constructor(
        public id:number,
        public flightNumber:string,
        public fromPlace:string,
        public toPlace:number,
        public startDateTime:Date,
        public endDateTime:Date,
        public ticketCost:number

    ){}
}