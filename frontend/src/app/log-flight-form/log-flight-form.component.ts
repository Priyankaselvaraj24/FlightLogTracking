import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-log-flight-form',
  templateUrl: './log-flight-form.component.html',
  styleUrls: ['./log-flight-form.component.css']
})
export class LogFlightFormComponent implements OnInit {
  flightForm:FormGroup;
aircrafts:any[]=[];
  constructor(private fb:FormBuilder,private backendservice:BackendService) { }


  ngOnInit():void{
    this.getAllAircrafts();
    this.flightForm = this.fb.group({
      aircraftId: ['', Validators.required],
      departure: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      destination: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      arrivalDate: ['', Validators.required]
    });
  }
  getAllAircrafts() {
    this.backendservice.getAllAircrafts().subscribe(
      aircrafts => {
        console.log('Aircrafts retrieved:', aircrafts);
        this.aircrafts = aircrafts;
      },
      error => {
        console.error('Error retrieving aircrafts:', error);
      }
    );
  }

 
  onSubmit() {
    if (this.flightForm.valid) {
      console.log(this.flightForm.value);
 
      const data:any = {
        "aircraft":{
          "id": this.flightForm.value.aircraftId
        },
        "departure": this.flightForm.value.departure,
        "destination":this.flightForm.value.destination,
        "date":this.flightForm.value.arrivalDate
      };
    //   const data2=  JSON.parse( `{
    //     "id": 3,
    //     "aircraft": {
    //         "id": 2,
    //         "name": "abc",
    //         "serial_number": 1234
    //     },
    //     "date": "2024-03-28T02:30:00.000+00:00",
    //     "departure": "cbe",
    //     "destination": "chennai"
    // }`)

      console.log(data);
      this.backendservice.postProduct(data).subscribe(
        (res: any) => {
          console.log("New FlightLog Created");
          alert("New FlightLog Added");
          this.flightForm.reset();
        }
      );
      }
      

  }

}
