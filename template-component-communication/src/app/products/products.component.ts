import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  electronicsProducts = [
    { id: 1, name: 'mobile', price: 10000 },
    { id: 2, name: 'tv', price: 15000 }
  ];

  beutyProducts = [
    { id: 1, name: 'shampoo', price: 1 },
    { id: 2, name: 'powder', price: 150 }
  ];

  topProducts = [
    { id: 1, name: 'apple phone', price: 100000 },
    { id: 2, name: 'kids car', price: 15000 }
  ];

  product = { id: 1, name: 'shirt', price: 299 };

  showPopup() {
    alert('showPopup() function called from child compoenent');
  }
}
