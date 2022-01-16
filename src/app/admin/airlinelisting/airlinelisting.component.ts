import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from '../model/airline';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-airlinelisting',
  templateUrl: './airlinelisting.component.html',
  styleUrls: ['./airlinelisting.component.css']
})
export class AirlinelistingComponent implements OnInit {

  constructor(private inventoryService:InventoryService, private router:Router) { }

  airlines:Airline[] = [];
  className:string = "hideit";
  

  ngOnInit(): void {
   this.getAllAirlines();
  }

  getAllAirlines(){
    this.inventoryService.getAllAirlines().subscribe((res:any)=>{
      this.airlines = res;
      this.className="viewit"
    })
  }

  addAirline(){
    this.router.navigateByUrl("/admin/addairline")
  }

  blockAirline(pnr:any,i:number){
    this.inventoryService.blockAirline(pnr).subscribe((res:any)=>{
      this.inventoryService.showNotification("Airline blocked successfully","Airline Blocked")
      this.airlines.splice(i,1)
    })
  }

}
