import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signupForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {
    
  }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['',Validators.required, Validators.minLength(5)]
    });
  }

  signup() {
    console.log(this.signupForm.value);
  }
}
