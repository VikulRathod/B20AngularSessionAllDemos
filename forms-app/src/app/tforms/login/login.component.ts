import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login(loginForm: NgForm) {
    console.log(loginForm);
    console.log(loginForm.value);
    
    alert(`form submitted
    username : ${loginForm.value.username}
    password : ${loginForm.value.password}`);
  }
}
