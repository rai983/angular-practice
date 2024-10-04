import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  product: any;
  // ActivatedRouteサービスをDIします
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const productObservable = this.productService.getProductById(
        params.get('productId')!
      );

      productObservable.subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (error) => {
          console.log('エラー');
        },
      });
    });
  }
}
