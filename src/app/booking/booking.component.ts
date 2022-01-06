import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Booking } from '../model/booking';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  booking:Booking = new Booking(0,"","",0,"",0,false,false,"",false,"");
  bookingForm:FormGroup;

  constructor(private activatedroute:ActivatedRoute, private router: Router, private flightService:FlightService, private toastr:ToastrService) {
    this.bookingForm = new FormGroup({
      flightNumber :new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      emailId: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      noOfPassenger: new FormControl("", [Validators.required]),
      isMeal: new FormControl("", [Validators.required]),
      isVeg: new FormControl("", [Validators.required]),
    });
   }

   ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => { 
      this.bookingForm.get('flightNumber')?.setValue(params.get('flightNo')||"")
  });
  
  }

  createBooking(){
    console.log(JSON.stringify(this.bookingForm.value))
    this.flightService.createBookings(this.bookingForm.value).subscribe((res:any)=>{
      console.log(JSON.stringify(res));
      this.booking = res;
      this.flightService.showNotification("Please note the pnr "+ this.booking.pnr,"Booking confirmed")
    })
    this.router.navigateByUrl('/searchflight');
  }
  

  

}
