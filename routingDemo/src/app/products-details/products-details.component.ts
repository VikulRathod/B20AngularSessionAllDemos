import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styles: [
  ]
})
export class ProductsDetailsComponent implements OnInit {
  productid: string | null = null;
  productname: string | null = null;

  product:any;
  products = [
    { id: 1, name: 'shirt', price: 299 },
    { id: 2, name: 't-shirt', price: 500 },
    { id: 3, name: 'kids-shirt', price: 100 },
    { id: 4, name: 'kids-t-shirt', price: 450 },
    { id: 5, name: 'women shirt', price: 199 }
  ];

  constructor(private route: ActivatedRoute) {
    // this.productid = route.snapshot.paramMap.get('id');

    // route.paramMap.subscribe(params => {
    //   this.productid = params.get('id');
    //   this.productname = params.get('name');
    // });

    // route.paramMap.subscribe(params => {
    //   this.productid = params.get['id'];
    //   this.productname = params.get['name']
    // });
  }
  ngOnInit(): void {
    // this.route.params.subscribe(p => {
    //   this.productid = p['id'],
    //     this.productname = p['name']
    // });
    // this.route.queryParams.subscribe(p => {
    //   this.productid = p['id'],
    //     this.productname = p['name']
    // });

    // console.log(this.route);
    let id: any;
    this.route.params.subscribe(p => {
      id = p['id'];
    });

   this.product = this.products.find(p => p.id == id);
  }
}
