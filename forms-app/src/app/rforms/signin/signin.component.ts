import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomConfirmValidator } from 'src/app/helpers/custom-confirm-validator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signinForm: FormGroup = new FormGroup({
    username: new FormControl('', 
    [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{6,}$/)]),
    email:new FormControl('', [Validators.required, Validators.email]),
    confirmemail: new FormControl('',[Validators.required, Validators.email]),
    address: new FormGroup({
      village: new FormControl(),
      taluka: new FormControl(),
      district: new FormControl()
    })
  },
  {
    validators: [CustomConfirmValidator.matchEmails()]
  });

  signin() {
    console.log(this.signinForm.value);
  }

  get username(){
    return this.signinForm.get('username');
  }

  get password(){
    return this.signinForm.get('password');
  }

  get email(){
    return this.signinForm.get('email');
  }

  get confirmemail(){
    return this.signinForm.get('confirmemail');
  }
}
