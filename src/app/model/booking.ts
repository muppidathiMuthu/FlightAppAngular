import { Timestamp } from "rxjs";

import { Passenger } from "../model/passenger"  

export class Booking{
    constructor(
        public id:number,
        public name:string,
        public emailId:string,
        public age:number,
        public gender:string,
        public noOfPassenger:number,
        public isMeal:boolean,
        public isVeg:boolean,
        public pnr:string,
        public isCancelled:boolean,
        public flightNumber:string
    ){}

}