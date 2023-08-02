import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'hooks-app';
  colorName: string = 'red';

  product: Product = new Product();

  constructor() {
    this.product.name = 'shirt';
    this.product.price = 299;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent component ngOnChanges called..');
  }

  ngOnInit(){
    console.log('parent component ngOnChanges called..');
  }
}
