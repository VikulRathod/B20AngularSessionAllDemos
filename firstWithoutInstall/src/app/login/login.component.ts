import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = 'Vihaan';
  fColor: string = 'red';
  bColor: string = 'yellow';
  borderColor: string = '2px dashed black';
  class1: string = 'myClass1';
  class2: string = 'myClass2';
  applyClass1: boolean = true;
  applyClass2: boolean = false;
  num: number = 10;
  names: string[] = ['Vishal', 'Akash', 'Vaibhav'];
  students: IStudent[] =
    [
      { name: 'Vishal', city: 'Pune', subjects: ['sub1', 'sub2'] },
      { name: 'Akash', city: 'Mumbai', subjects: ['sub1', 'sub2', 'sub3'] },
      { name: 'Vaibhav', city: 'Satara', subjects: ['sub1', 'sub2', 'sub4'] }
    ];
  colors: string[] = ['red', 'green', 'blue'];
  selectedColor:string='';
  showCustomIf = true;

  changeVisibility(){
    this.showCustomIf = !this.showCustomIf;
  }

}

interface IStudent {
  name: string;
  city: string;
  subjects: string[];
}