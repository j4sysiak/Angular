import {Component, OnInit} from '@angular/core';
import {PolicyModel} from '../policy-model';
import {PolicyService} from '../policy.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductModel} from '../../product/product-response';
import {throwError} from 'rxjs';
import {ProductService} from '../../product/product.service';

@Component({
  selector: 'app-policy-data-details',
  templateUrl: './policy-data-details.component.html',
  styleUrls: ['./policy-data-details.component.css']
})
export class PolicyDataDetailsComponent implements OnInit {

  id: number;
  // początkowa inicjalizacja objektu polisy, żeby nie było błędu: ERROR TypeError: cannot read property 'name' of undefined
  policy: PolicyModel = new PolicyModel();
  product: ProductModel = new ProductModel();
  products: Array<ProductModel>;
  hasProductId: boolean;
  productId: number;

  constructor(private policyService: PolicyService,
              private productService: ProductService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    }, error => {
      throwError(error);
    });

    this.id = this.activateRoute.snapshot.params['id'];
    console.log('(PolicyDataDetailsComponent) policy id = ' , this.id);

    if (this.id != -1) {
      this.policyService.getPolicyById(this.id).subscribe(
        data => this.policy = data
      );
    }
  }

  savePolicyDataDetails(value: any) {
    console.log('(PolicyDataDetailsComponent) policy id = ' + this.id);
    if (this.id == -1) {
      //create
      console.log('(PolicyDataDetailsComponent) create ...');
      this.policyService.createPolicy(this.policy).subscribe(
        data => {
          const productName: string = value.productName;
          this.getProductByProductName(productName);
        }
      );
    } else {
      //update
      console.log('update ...');
      this.policyService.updatePolicy(this.id, this.policy).subscribe(
        data => {
          const productName: string = value.productName;
          this.getProductByProductName(productName);
        }
      );
    }
  }

  getProductByProductName(productName: string) {
    this.productService.getProductByProductName(productName).subscribe(data => {
      // this.product = data;
      this.router.navigate(['view-product', data.id]);
    }, error => {
      throwError(error);
    });
  }
}
