import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AircraftDetailsComponent } from './aircraft-details/aircraft-details.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { LogFlightFormComponent } from './log-flight-form/log-flight-form.component';
import { ViewDetailsComponent } from './view-details/view-details.component';


const routes: Routes = [
  {
    path:'form',component:LogFlightFormComponent
  },
  {
    path:'',component:FlightListComponent
  },
  {
    path:'flightlogs/:id',component:ViewDetailsComponent
  },
  {
    path:'view',component:ViewDetailsComponent
  },
  {
    path:'aircrafts',component:AircraftDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
