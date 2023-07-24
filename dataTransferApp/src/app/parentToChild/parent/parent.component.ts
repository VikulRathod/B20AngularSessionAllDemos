import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentData: string = 'Vikul';
  parentDetails = { name: 'vikul', city: 'pune', mobile: '8956890522' };

  childData: string = '';
  childAge:number =0;

  retrieveData(data: any) {
    if(!isNaN(data)){
      this.childAge = data;
    }
    else if(typeof data == 'string'){
      this.childData = data;
    }
  }
}
