import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Flight } from 'src/app/model/flight';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private url:string = "http://ec2-13-232-122-12.ap-south-1.compute.amazonaws.com:8989/inventory/";
  constructor(private httpClient:HttpClient, private toastr:ToastrService) { }

  authenticateUser(user:User){
    return this.httpClient.post(this.url+"authenticate", user );
  }

  getAllFlights(){
    return this.httpClient.get(this.url+"api/inventory/allflights")
  }

  showErrorNotification(message:string, title:string){
    this.toastr.error(message,title)
  }

  showNotification(message:string, title:string){
    this.toastr.success(message,title)
  }

  addFlight(flight:Flight){
    return this.httpClient.post(this.url+"api/inventory/flight", flight );
  }

  addAirline(flight:Flight){
    return this.httpClient.post(this.url+"api/inventory/airline", flight );
  }

  getAllAirlines(){
    return this.httpClient.get(this.url+"api/inventory/airline")
  }

  blockAirline(airlineId:string){
    let params = new HttpParams();
    params = params.append('id', airlineId);
    return this.httpClient.put(this.url+"api/inventory/airline/"+airlineId,{});
   }
}
