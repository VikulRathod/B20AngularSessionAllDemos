import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'shirt', price: 299 },
    { id: 2, name: 't-shirt', price: 500 },
    { id: 3, name: 'kids-shirt', price: 100 },
    { id: 4, name: 'kids-t-shirt', price: 450 },
    { id: 5, name: 'women shirt', price: 199 }
  ];
}
