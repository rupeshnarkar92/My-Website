import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactUsForm : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactUsForm = this.fb.group({
      "firstName":[null, Validators.required],
      "lastName":[null, Validators.required],
      "email" :[null, [Validators.required, Validators.email]],
      "message" :[null, Validators.required],
    });

    console.log("this.contactUsForm",this.contactUsForm);
  }

  sendMessage(formData:NgForm){
    console.log("formData",formData);
  }

}
