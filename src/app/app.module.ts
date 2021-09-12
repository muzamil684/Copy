import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './book-tickets/user/user.component';
import { BusSearchResultComponent } from './book-tickets/user/bus-search-result/bus-search-result.component';

import { PrintComponent } from './book-tickets/user/print/print.component';
import { SelectBusComponent } from './book-tickets/user/select-bus/select-bus.component';
import { SelectSeatComponent } from './book-tickets/user/select-seat/select-seat.component';
import { UserFormComponent } from './book-tickets/user/user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SelectBusService } from './book-tickets/user/services/selectBus.service';
import { BookingService } from './book-tickets/user/services/booking.service';
import { UserService } from './book-tickets/user/services/user.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { ProfileComponent } from './profile/profile.component';
import { BengaluruComponent } from './bengaluru/bengaluru.component';
import { ChennaiComponent } from './chennai/chennai.component';
import { HotelsPageIComponent } from './hotes-page-i/hotes-page-i.component';
import { HotelsComponent } from './hotels/hotels.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BusSearchResultComponent,
    PrintComponent,
    SelectBusComponent,
    SelectSeatComponent,
    UserFormComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    FooterComponent,
    BookTicketsComponent,
    ProfileComponent,
    BengaluruComponent,
    ChennaiComponent,
    HotelsPageIComponent,
    HotelsComponent,
   
 
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    RouterModule
  ],
  providers: [
    SelectBusService,
    BookingService,
    UserService,
    {provide :LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

