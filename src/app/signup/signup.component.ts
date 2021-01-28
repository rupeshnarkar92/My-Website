import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm : FormGroup;

  constructor(private fb: FormBuilder, private auth:AuthenticationService) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      "firstName":[null, Validators.required],
      "lastName":[null, Validators.required],
      "email" :[null, [Validators.required, Validators.email]],
      "password" :[null, Validators.required],
    });
  }

  signUp(formData:NgForm){

    return this.auth.signUp(formData).subscribe(
      (user)=> console.log("SignUp",user));
  }

}
