import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightListingComponent } from './flight-listing/flight-listing.component';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddHeaderInterceptor } from './AddHeaderInterceptor';
import { AirlinelistingComponent } from './airlinelisting/airlinelisting.component';
import { AddflightComponent } from './addflight/addflight.component';



const routes:Routes = [
  {path: "login", component: LoginComponent},
  {path: "flightlisting", component : FlightListingComponent},
  {path: "airlinelisting", component : AirlinelistingComponent},
  {path: "addflight", component : AddflightComponent},
  {path: "**", redirectTo: "login"}
]

@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    FlightListingComponent,
    AirlinelistingComponent,
    AddflightComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
