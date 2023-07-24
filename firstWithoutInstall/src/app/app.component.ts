import { Component } from '@angular/core';

@Component({
  selector: 'vhaash-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Vihaan';
  num1: number = 100;
  num2: number = 20;
  site: string = 'http://vhaashtech.com';
  empname: string = 'Krishika';
  isReadOnly: boolean = false;
  sname : string = '';
  customername : string = 'Akash';
  isShowCustomIf=true;

  details(){
    // alert('Hello');
    this.sname='VHaaSh Technologies';
  }

  welcome(name : string){
    alert(`Welcome, ${name}`);
  }

  txtFocus(){
    this.sname='You are on Textbox';
  }
  txtBlur(){
    this.sname='You left Textbox';
  }
}
