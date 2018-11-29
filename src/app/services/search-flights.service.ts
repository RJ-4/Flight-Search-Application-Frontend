import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SearchFlightsService {

  constructor(private http: Http) { }

  

  searchFlights(flightParams: any) {
  
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Currency-Code': window.localStorage.getItem('Currency-Code')
    });
  
    return this.http.post(`http://localhost:8080/api/flights`, flightParams, {headers: headers});
  }
}
