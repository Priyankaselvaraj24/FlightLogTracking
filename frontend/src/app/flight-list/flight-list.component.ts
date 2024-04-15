import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { BackendService } from '../services/backend.service';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';
import { ElementRef } from '@angular/core';
import * as xlsx from 'xlsx';
import { ExcelService } from '../services/excel.service';
import { Aircraft } from '../aircraft.model';
import { ViewDetailsComponent } from '../view-details/view-details.component';
import { Router } from '@angular/router';

@Component({

  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']

})

export class FlightListComponent implements OnInit {

  flights: any[] = [];

  filteringflights: any[] = [];

  flightsTotal = -1;
  @ViewChild('flight',{ static: true }) flight!: ElementRef;

  constructor(private backendService: BackendService,private excelService:ExcelService,private router:Router) {}

  ngOnInit() {

    this.backendService.getLogs().subscribe(

      data => {

        this.flights = data;

        console.log(this.flights);

        this.filteringflights = data;

        this.updateCriteria(''); // Initially, show all flights

      }

    );

  }
  generateExcel(){
    this.excelService.generateExcel('flights', 'Flights');
  }



  generatePDF(){
    const element = this.flight.nativeElement;
    const opt = {
      margin:       1,
      filename:     'table.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
 
    html2pdf().from(element).set(opt).save();
  }

  generateJPG() {
    const element = this.flight.nativeElement;
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg');
      const img = new Image();
      img.src = imgData;
      const link = document.createElement('a');
      link.download = 'screenshot.jpg';
      link.href = imgData;
      link.click();
    }).catch((error) => {
      console.error('Error generating JPG:', error);
    });
  }

 
  get flightsFunction() { return this.filteringflights; }
 
  updateCriteria(criteria: string) {

    criteria = criteria ? criteria.trim() : '';
 
    this.filteringflights = this.flights.filter(hero => {

      return hero.aircraft.id.toString().includes(criteria);

    });
 
    const newTotal = this.filteringflights.length;
 
    if (this.flightsTotal !== newTotal) {

      this.flightsTotal = newTotal;

    } else if (!criteria) {

      this.flightsTotal = -1;

    }

  }

  get flightsFunction1() { return this.filteringflights; }
 
  updateCriteriaflight(criteria: string) {

    criteria = criteria ? criteria.trim() : '';
 
    this.filteringflights = this.flights.filter(hero => {

      return hero.id.toString().includes(criteria);

    });
 
    const newTotal = this.filteringflights.length;
 
    if (this.flightsTotal !== newTotal) {

      this.flightsTotal = newTotal;

    } else if (!criteria) {

      this.flightsTotal = -1;

    }

  }

    viewFlightDetails(flightId: number) {
    console.log(flightId);
    this.router.navigate(['/flightlogs', flightId]);
    // window.location.replace(`/product/${productId}`);
  }

}
