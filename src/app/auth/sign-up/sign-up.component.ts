import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  onSignUp(signUpForm:NgForm)
  {
    const email = signUpForm.value.email;
    const password = signUpForm.value.password;
    this.authService.onSignUp(email,password);
  }

}
