import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: Http) { }

  signUp(newUser: {
    'username': string,
    'password': string
  }) {

    return this.http.post(`http://localhost:8080/api/sign-up`, newUser);
  }
}
