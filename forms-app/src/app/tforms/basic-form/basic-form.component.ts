import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent {
  login(name: string, pwd: string) {
    alert(`login clicked 
    name: ${name}
    password : ${pwd}`);

    // call - angular login service
    // call - api login method
  }
}
