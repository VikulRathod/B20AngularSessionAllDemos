import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  dataFromParent: string = '';

  @Input()
  parentDetailsData: any;

  name: string = 'Vihaan';
  age: number = 23;
  // email: string = 'vihaan@gmail.com';

  // @Output()
  // sendData: EventEmitter<string> = new EventEmitter<string>();

  // getData() {
  //   this.sendData.emit(this.name);
  // }

  // getEmail() {
  //   this.sendData.emit(this.email);
  // }

  @Output()
  sendData: EventEmitter<any> = new EventEmitter<any>();

  getData() {
    this.sendData.emit(this.name);
  }
  getAge() {
    this.sendData.emit(this.age);
  }
}
