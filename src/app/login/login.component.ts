import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router) { }

  @ViewChild('form') loginForm: NgForm;
  isLoginSuccessful = true;

  ngOnInit() {
  }

  onLogin() {
    const currentUser = {
      'username': this.loginForm.value.username,
      'password': this.loginForm.value.password
    }

    this.loginService.login(currentUser)
                     .subscribe((response) => {
                       console.log(response.json());
                       this.isLoginSuccessful = true;
                     },
                     (error) => {
                       console.log(error);
                       this.isLoginSuccessful = false;
                     },
                     () => {
                        window.localStorage.setItem('Currency-Code', 'INR');
                        this.router.navigate(['/search-flights']);
                     })
  }
}
