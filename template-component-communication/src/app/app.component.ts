import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('heading') head: ElementRef | any;
  @ViewChildren('heading') heading: QueryList<any> | any;

  @ViewChild('products') child: ProductsComponent | any;

  constructor() {
    // console.log(this.heading);
  }
  ngAfterViewInit(): void {
    // this.head.nativeElement.style.color = 'red';
    // this.head.nativeElement.innerHTML = 'Heading Text Changed';

    console.log(this.heading);
    // this.heading.first.nativeElement.style.color= 'red';
    this.heading._results[0].nativeElement.style.color= 'red';
    this.heading.last.nativeElement.style.color= 'green';

    console.log(this.child.product);
  }

  callFunction(){
    this.child.showPopup();
  }
}
