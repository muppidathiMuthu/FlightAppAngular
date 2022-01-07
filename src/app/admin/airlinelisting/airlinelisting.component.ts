import { Component, OnInit } from '@angular/core';
import { Airline } from '../model/airline';

@Component({
  selector: 'app-airlinelisting',
  templateUrl: './airlinelisting.component.html',
  styleUrls: ['./airlinelisting.component.css']
})
export class AirlinelistingComponent implements OnInit {

  constructor() { }

  airlines:Airline[] = [];

  ngOnInit(): void {
   // this.getAllAirline();
  }

 /* getAllAirline(){
    this.inventoryService.getAllAirline().subscribe((res:any)=>{
      this.airlines = res;
      this.className="viewit"
    })
  }*/

}
