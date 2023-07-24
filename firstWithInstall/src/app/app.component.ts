import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [
    `
    .para{
      color:white;
      background-color:red
    }
    .font{
      border:1px solid black
    }
    `
  ]
})
export class AppComponent {
  name = 'VHaaSh Technologies';
  pcolor: string = 'red';
  bcolor: string = 'yellow';
  clsName: string = 'para';
  fClsName: string = 'font';
  num:number=11;
  names:string[] = ['Vishal', 'Dipak','Snehal'];
}
