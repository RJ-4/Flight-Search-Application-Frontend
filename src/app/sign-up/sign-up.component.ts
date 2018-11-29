import { Component, OnInit, ViewChild } from '@angular/core';
import { SignUpService } from '../services/sign-up.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild('form') loginForm: NgForm;
  isSignUpSuccessful = true;
  arePasswordsMatching = true;
  isUsernameTaken = false;

  constructor(private signUpService: SignUpService,
              private router: Router) { }

  ngOnInit() {
  }

  onSignUp() {
    const newUser = {
      'username': this.loginForm.value.username,
      'password': this.loginForm.value.password,
    };

    const confirmPassword = this.loginForm.value.confirmPassword;

    if(newUser.password !== confirmPassword) {
      this.arePasswordsMatching = false;
      return;
    }

    this.signUpService.signUp(newUser)
                      .subscribe((response) => {
                        console.log(response.json());
                      },
                      (error) => {
                        this.isUsernameTaken = true;
                      },
                      () => {
                        this.router.navigate(['/search-flights']);
                      })
  }

}
