import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private prodService: ProductServiceService) {

  }

  getProducts() {
    // this.products = this.prodService.getProducts();
    // return this.products;

    return this.prodService.getProducts();
  }

  // products = [
  //   { id: 1, name: 'shirt', price: 299 },
  //   { id: 2, name: 't-shirt', price: 199 },
  //   { id: 3, name: 'women shirt', price: 599 },
  //   { id: 4, name: 'women t-shirt', price: 799 },
  //   { id: 5, name: 'kids shirt', price: 150 }
  // ];
}
