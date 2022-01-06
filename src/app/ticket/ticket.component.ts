import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Booking } from '../model/booking';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ngOnInit(): void {
  }

  ticketForm:FormGroup;
  bookings:Booking[] = [];
  className:string = "hideit";


  constructor(private flightService:FlightService){
    this.ticketForm = new FormGroup({
      byMethod: new FormControl("", [
        Validators.required
      ]),
      emailOrPnr: new FormControl("", [
        Validators.required
      ])
    });
  } 

  getBookings(){
    if(this.ticketForm.get('byMethod')?.value == 'byPNR'){
      this.flightService.getBookingsByPnr(this.ticketForm.get('emailOrPnr')?.value).subscribe((res:any)=>{
        this.bookings=res
        this.className = "viewit"
      })
    }else{
      this.flightService.getBookingsByEmail(this.ticketForm.get('emailOrPnr')?.value).subscribe((res:any)=>{
        this.bookings=res
        this.className = "viewit"
      })
    }
  }

  cancelBooking(pnr:any,i:number){
      this.flightService.cancelBookings(pnr).subscribe((res:any)=>{
        this.flightService.showNotification("The booking has been cancelled","Booking successfully cancelled")
        this.bookings.splice(i,1)
      })
    }
  
  
  
}
