import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Booking } from '../model/booking';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class FlightService {

   
  private url:string = "http://ec2-13-232-122-12.ap-south-1.compute.amazonaws.com:8989/booking/api/booking/";

  constructor(private httpClient:HttpClient, private toastr:ToastrService) { }

  searchFlight(from:string, to: string){

    let params = new HttpParams();

    params = params.append('from', from);
    params = params.append('to', to);

    return this.httpClient.get(this.url+"search", { params: params });
  }
  
  getBookingsByPnr(pnr:string){

    let params = new HttpParams();

    params = params.append('pnr', pnr);

    return this.httpClient.get(this.url+"ticket/pnr", { params: params });

  }

  getBookingsByEmail(email:string){

    let params = new HttpParams();

    params = params.append('emailId', email);

    return this.httpClient.get(this.url+"ticket/email", { params: params });

  }

  createBookings(booking:Booking){
    
   return this.httpClient.post(this.url+"booking", booking );
  }

  cancelBookings(pnr:string){
    let params = new HttpParams();
    params = params.append('pnr', pnr);
    return this.httpClient.put(this.url+"cancel/pnr/"+pnr,{});
   }

  showNotification(message:string, title:string){
    this.toastr.success(message,title)
  }

}
