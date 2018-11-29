import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  login(currentUser: {
    'username': string,
    'password': string
  }) {

    return this.http.post(`http://localhost:8080/api/login`, currentUser);  
  }
}
