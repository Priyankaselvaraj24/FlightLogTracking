import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aircraft } from '../aircraft.model';
import { BackendService } from '../services/backend.service';
import { ViewChild } from '@angular/core';
import html2pdf from 'html2pdf.js';
import { ElementRef } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
id:number;
flights:Aircraft[];
  constructor(private router:ActivatedRoute,private backendService:BackendService) { }
  @ViewChild('flight',{ static: true }) flight!: ElementRef;

  ngOnInit() {
    this.router.params.subscribe(params => {
 
      this.id = +params['id']; // Convert the parameter to a number
      console.log("Flight ID:", this.id);
      this.backendService.getById(this.id).subscribe(
        data => {
          this.flights = data;
          console.log(this.flights);
        }
      );
    });
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


}
