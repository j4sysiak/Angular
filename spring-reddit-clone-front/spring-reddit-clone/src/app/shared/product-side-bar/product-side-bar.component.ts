import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../product/product-response';
import {ProductService} from '../../product/product.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-product-side-bar',
  templateUrl: './product-side-bar.component.html',
  styleUrls: ['./product-side-bar.component.css']
})
export class ProductSideBarComponent implements OnInit {

  products: Array<ProductModel> = [];
  displayViewAll: boolean;

  constructor(private productService: ProductService) {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  ngOnInit(): void {
  }

}
