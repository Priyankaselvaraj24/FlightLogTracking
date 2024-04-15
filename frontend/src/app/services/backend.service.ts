import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aircraft } from '../aircraft.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  port: number;
  constructor(private http: HttpClient) {
    this.port = 5050;
  }

  getLogs(): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:${this.port}/flightlogs`)
  }

  getById(id: number) : Observable<any>{
    return this.http.get<any>(`http://localhost:${this.port}/flightlogs/${id}`)
  }
 
  postProduct(data:any):Observable<any>{
    return this.http.post<any>(`http://localhost:${this.port}/flightlogs`,data);
  }
    getAllAircrafts():Observable<Aircraft[]>{
        return this.http.get<Aircraft[]>(`http://localhost:${this.port}/aircrafts`);
    }
    
}