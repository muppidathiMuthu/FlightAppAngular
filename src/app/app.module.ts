import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from "@angular/router";
import { TicketComponent } from './ticket/ticket.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';

const routes:Routes = [
  {path: "viewticket", component: TicketComponent},
  {path: "searchflight", component: SearchComponent},
  {path: "searchflight/booking/:flightNo", component: BookingComponent},
  {path: "**", redirectTo: "searchflight"}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TicketComponent,
    SearchComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
	  ToastrModule.forRoot({timeOut: 100000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton:true}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ { provide: APP_BASE_HREF, useValue: '/' + (window.location.pathname.split('/')[1] || '') }],
  bootstrap: [AppComponent]
})

export class AppModule { }
