import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Flight } from '../model/flight';
import { FlightService } from '../services/flight.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  ngOnInit(): void {
  }

  flights:Flight[] = [];
  searchForm:FormGroup;
  className:string = "hideit";

  constructor(private flightService:FlightService){
    this.searchForm = new FormGroup({
      fromPlace: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      toPlace: new FormControl("")
    });
  } 
  searchFlight(){
    this.flightService.searchFlight(this.searchForm.value.fromPlace, 
                                      this.searchForm.value.toPlace).subscribe((res:any)=>{
      this.className="viewit"
      this.flights= res
    })
  }

}
