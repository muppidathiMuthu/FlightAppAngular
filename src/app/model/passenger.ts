import { Timestamp } from "rxjs";

export class Passenger{
    constructor(
        public id:number,
        public name:string,
        public age:number,
        public gender:string,
        public seatNo:number
    ){}
}