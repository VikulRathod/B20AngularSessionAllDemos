import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  getProducts() {
    let products = [
      { id: 1, name: 'shirt', price: 299 },
      { id: 2, name: 't-shirt', price: 199 },
      { id: 3, name: 'women shirt', price: 599 },
      { id: 4, name: 'women t-shirt', price: 799 },
      { id: 5, name: 'kids shirt', price: 150 },
      { id: 6, name: 'fridge', price: 23000 }
    ];
    return products;
  }
}
