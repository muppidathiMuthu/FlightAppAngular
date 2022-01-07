import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {
  [x: string]: any;

  flightForm:FormGroup;
  constructor(private inventoryService:InventoryService, private router:Router) {
    this.flightForm = new FormGroup({
      flightNumber :new FormControl("", [Validators.required]),
      fromPlace: new FormControl("", [Validators.required]),
      startDateTime: new FormControl("", [Validators.required]),
      endDateTime: new FormControl("", [Validators.required]),
      scheduleDays: new FormControl("", [Validators.required]),
      instrument: new FormControl("", [Validators.required]),
      businessSeats: new FormControl("", [Validators.required]),
      nonBusinessSeats: new FormControl("", [Validators.required]),
      ticketCost: new FormControl("", [Validators.required]),
      airlineId: new FormControl("", [Validators.required]),
    });
   }

  ngOnInit(): void {
  }

  addFlight(){
    this.inventoryService.addFlight(this.flightForm.value).subscribe((res:any)=>{
      console.log(JSON.stringify(res));
      this.inventoryService.showNotification("Flight added successfully","Flight added")
      this.router.navigateByUrl("/admin/flightlisting")
    })

  }

}
