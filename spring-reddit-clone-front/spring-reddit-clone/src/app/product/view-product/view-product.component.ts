import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {throwError} from 'rxjs';

import {ProductService} from '../product.service';
import {ProductModel} from '../product-response';
import {PolicyModel} from '../../policy/policy-model';
import {PolicyService} from '../../policy/policy.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  products: Array<ProductModel>;
  productId: number;
  product: ProductModel = new ProductModel;
  currentProductId: string;
  policies: PolicyModel[] = [];

  constructor(private productService: ProductService,
              private policyService: PolicyService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
    this.productId = this.activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getProductById();
    this.getPolicies();
  }

  getProductById() {
    this.productService.getProductById(this.productId).subscribe(data => {
      this.product = data;
    }, error => {
      throwError(error);
    });
  }

  private getPolicies() {
   const hasProductId: boolean = this.activateRoute.snapshot.paramMap.has('id');
   console.log('hasProductId: ' + hasProductId);
   console.log('this.currentProductId: ' + this.currentProductId);

   if (hasProductId) {
     console.log('Pokaż tylko wybrane polisy (by ProductId)');
     this.currentProductId = this.activateRoute.snapshot.paramMap.get('id');

     this.policyService.getPoliciesByProductId(+this.currentProductId).subscribe(data => {
       this.policies = data;
     }, error => {
       throwError(error);
     });
   } else {
     console.log('Pokaż wszystkie polisy');
     this.policyService.getAllPolicies().subscribe(data => {
       this.policies = data;
     }, error => {
       throwError(error);
     });
   }
  }

  deletePolicy(id: number) {
    if(!confirm('Are you sure?')) {
      return;
    }
    console.log('(ViewProductComponent) delete policy: ', id);
    // lub console.log(`delete policy: ${id}`);
    this.policyService.deletePolicy(id).subscribe(
      response => {
        console.log(response);
        this.refreshPolicies();
        this.router.navigate(['view-product', id]);
      }
    );
  }

  updatePolicy(id: number) {
    console.log('(ViewProductComponent) update policy: ', id);
    // lub console.log(`update policy: ${id}`);
    this.router.navigate(['policies-data', id]);
  }

  private refreshPolicies() {
    const hasProductId: boolean = this.activateRoute.snapshot.paramMap.has('id');
    if(hasProductId){
      this.productId = +this.activateRoute.snapshot.paramMap.get('id');
      this.policyService.getPoliciesByProductId(this.productId).subscribe(data => {
        this.policies = data;
      });
    }
  }
}
