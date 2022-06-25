import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {ProductModel} from '../product-response';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Array<ProductModel>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    }, error => {
      throwError(error);
    });
  }

}
