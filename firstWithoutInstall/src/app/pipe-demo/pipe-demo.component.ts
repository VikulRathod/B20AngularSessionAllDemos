import { Component } from '@angular/core';

@Component({
  selector: 'vhaash-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styles: [
  ]
})
export class PipeDemoComponent {
  isVisible: boolean = true;
  name: string = 'Vishal';
  city: string = 'MUMBAI';
  address: string = 'viraj complex, near zeal college chowk';
  salary: number = 200;
  dateOfBirth: any = new Date('09/16/1990');
  currentDateTime = new Date();

  students = [
    { name: 'Vishal', city: 'pune', DOB: new Date('02/15/1990') },
    { name: 'Dipak', city: 'mumbai', DOB: new Date('03/12/1994') },
    { name: 'Mahesh', city: 'satara', DOB: new Date('06/01/1998') },
    { name: 'Snehal', city: 'pune', DOB: new Date('02/15/2000') },
    { name: 'Aniket', city: 'Delhi', DOB: new Date('04/15/2012') }
  ];

  update() {
    this.isVisible = !this.isVisible;
  }
}
