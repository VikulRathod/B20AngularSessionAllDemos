import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  // products = [
  //   {id:1, name:'shirt', price:299},
  //   {id:2, name:'t-shirt', price:199},
  //   {id:3, name:'women shirt', price:599},
  //   {id:4, name:'women t-shirt', price:799},
  //   {id:5, name:'kids shirt', price:150}
  // ];

  constructor(private prodService: ProductServiceService) {

  }

  getProducts() {
    return this.prodService.getProducts();
  }
}
