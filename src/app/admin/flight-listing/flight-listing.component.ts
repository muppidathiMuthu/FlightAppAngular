import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/model/flight';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-flight-listing',
  templateUrl: './flight-listing.component.html',
  styleUrls: ['./flight-listing.component.css']
})
export class FlightListingComponent implements OnInit {

  constructor(private inventoryService:InventoryService, private router:Router) { }

  flights:Flight[] = [];
  className:string = "hideit";
  
  ngOnInit(): void {
    this.getAllFlights();
  }

  getAllFlights(){
    this.inventoryService.getAllFlights().subscribe((res:any)=>{
      this.flights = res;
      this.className="viewit"
    })
  }

  addFlights(){
    this.router.navigateByUrl("/admin/addflight")
  }
  

}
