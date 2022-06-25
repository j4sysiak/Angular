import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';

import {PolicyModel} from '../policy-model';
import {ProductModel} from '../../product/product-response';
import {ProductService} from '../../product/product.service';
import {PolicyService} from '../policy.service';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css']
})
export class CreatePolicyComponent implements OnInit {

  policy: PolicyModel = new PolicyModel();
  products: Array<ProductModel>;

  constructor(private policyService: PolicyService,
              private productService: ProductService,
              private router: Router) {
    this.policy = {
      policyName: '',
      policyCreatedDate: '',
      policyDescription: '',
      productName: '',
      productId: 0
    };
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response;
    }, error => {
      throwError(error);
    });
  }

  createPolicy() {
    console.log("creating Policy ..." + this.policy.policyName);
    this.policyService.createPolicy(this.policy).subscribe(response => {
      this.policy = response;
      this.router.navigateByUrl('/list-policy');
    }, error => {
      throwError(error);
    });
  }

  discard() {
    this.router.navigateByUrl('/');
  }
}
