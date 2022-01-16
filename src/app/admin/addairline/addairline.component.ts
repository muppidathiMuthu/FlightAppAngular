import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-addairline',
  templateUrl: './addairline.component.html',
  styleUrls: ['./addairline.component.css']
})
export class AddairlineComponent implements OnInit {


  

  airlineForm:FormGroup;
  constructor(private inventoryService:InventoryService, private router:Router) {
    this.airlineForm = new FormGroup({
      airlineName: new FormControl("", [Validators.required]),
      airlineContact: new FormControl("", [Validators.required]),
      airlineAddress: new FormControl("", [Validators.required])
    });
   }

   ngOnInit(): void {
    }
 

  addAirline(){
    this.inventoryService.addAirline(this.airlineForm.value).subscribe((res:any)=>{
      console.log(JSON.stringify(res));
      this.inventoryService.showNotification("Airline added successfully","Airline added")
      this.router.navigateByUrl("/admin/airlinelisting")
    })

  }
}
