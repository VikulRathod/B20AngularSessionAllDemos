import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hooks-app';
  colorName: string = 'red';

  product: Product = new Product();

  constructor() {
    this.product.name = 'shirt';
    this.product.price = 299;
  }
}
