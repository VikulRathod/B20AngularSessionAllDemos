import { Component } from '@angular/core';

@Component({
  selector: 'app-dir-comp',
  templateUrl: './dir-comp.component.html',
  styles: [
    `.class1{color:white; background-color:red}`
  ]
})
export class DirCompComponent {
  name: string = 'Vihaan';
  color: string = 'red';
  bColor: string = 'yellow';
  enableClass: boolean = false;
  colors: string[] = ['red', 'green', 'blue'];
  isVisible: boolean = true;
  toggleDiv(){
    this.isVisible = !this.isVisible;
  }
}
