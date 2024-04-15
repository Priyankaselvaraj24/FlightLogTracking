import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { LogFlightFormComponent } from './log-flight-form/log-flight-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AircraftDetailsComponent } from './aircraft-details/aircraft-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    LogFlightFormComponent,
    ViewDetailsComponent,
    NavbarComponent,
    AircraftDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
