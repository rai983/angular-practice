import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss',
})
export class ProductListingsComponent {
  constructor(private productService: ProductService) {}
  // products: any = [1, 2, 3, 4];
  products: any;

  ngOnInit() {
    const productsObservable = this.productService.getProducts();
    productsObservable.subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('エラーが発生しました ' + err);
      },
    });
  }
}
