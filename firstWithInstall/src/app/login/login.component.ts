import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = 'Vihaan';
  company: string = 'VHaaSh Technologies';
  site: string = 'https://vhaashtech.com';

  details() {
    alert(`name: ${this.name} company : ${this.company}`);
  }
}
