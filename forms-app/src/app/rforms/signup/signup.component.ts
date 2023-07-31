import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllCustomValidators } from 'src/app/helpers/all-custom-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signupForm: FormGroup | any;
  emailInUpper: string | any = '';

  constructor(private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      // email: ['', [Validators.required, Validators.pattern('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/')]]
      email: ['', [Validators.required, AllCustomValidators.emailPattern()]],
      confirmemail: ['', [Validators.required, AllCustomValidators.emailPattern(), 
        AllCustomValidators.compareControl('email')]]
    });
  }

  signup() {
    console.log(this.signupForm.value);
  }

  autoEmailUpper(){
    const e : string = this.signupForm.get('email').value;
    this.emailInUpper = e?.toUpperCase();
  }
}
