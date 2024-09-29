import { Component } from '@angular/core';
import { products } from '../../products';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss',
})
export class ProductListingsComponent {
  constructor() {}
  // products: any = [1, 2, 3, 4];
  products: any;

  ngOnInit() {
    this.products = products;
  }
}
