import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../product.service';
import {throwError} from 'rxjs';
import {ProductModel} from '../product-response';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: ProductModel = new ProductModel();
  // createProductForm: FormGroup;
  // name = new FormControl('');

  constructor(private productService: ProductService,
              private router: Router) {
    // this.createProductForm = new FormGroup({
    //   name: new FormControl('', Validators.required)
    // });
    // this.product = {
    //   name: ''
    // };
  }

  ngOnInit(): void {
  }

  createProduct() {
    // this.product.name = this.createProductForm.get('name').value;
    console.log("creating Product ..." + this.product.name);
    this.productService.createProduct(this.product).subscribe(response => {
      this.product = response;
      this.router.navigateByUrl('/list-product');
    }, error => {
      throwError(error);
    });
  }

  discard() {
    this.router.navigateByUrl('/');
  }
}
