import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PolicyModel} from '../policy-model';
import {ProductModel} from '../../product/product-response';
import {Router} from '@angular/router';
import {ProductService} from '../../product/product.service';
import {PolicyService} from '../policy.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css']
})
export class CreatePolicyComponent implements OnInit {

  policy: PolicyModel = new PolicyModel();
  products: Array<ProductModel>;
  createPolicyForm: FormGroup;

  constructor(private router: Router, private policyService: PolicyService,
              private productService: ProductService) {
    this.policy = {
      policyName: '',
      policyCreatedDate: '',
      policyDescription: '',
      productName: '',
      productId: 0
    };
  }

  ngOnInit(): void {
    this.createPolicyForm = new FormGroup({
      policyName: new FormControl('', Validators.required),
      policyDescription: new FormControl('', Validators.required),
      // policyCreatedDate: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
    });

    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    }, error => {
      throwError(error);
    });
  }

  createPolicy() {
    this.policy.policyName = this.createPolicyForm.get('policyName').value;
    this.policy.policyDescription = this.createPolicyForm.get('policyDescription').value;
    // this.policyModel.policyCreatedDate = this.createPolicyForm.get('policyCreatedDate').value;
    this.policy.productName = this.createPolicyForm.get('productName').value;
    //this.policyModel.productId = this.createPolicyForm.get('productId').value;

    // console.log('this.policyModel.policyName = ' + this.policy.policyName);
    // console.log('this.policyModel.policyDescription = ' + this.policy.policyDescription);
    // console.log('this.policyModel.productName = ' + this.policy.productName);
    //console.log('this.policyModel.productId = ' + this.policyModel.productId);

    this.policyService.createPolicy(this.policy).subscribe(response => {
      response = this.policy;
      this.router.navigateByUrl('/list-policy');
    }, error => {
      throwError(error);
    });
  }

  discardPolicy() {
    this.router.navigateByUrl('/');
  }
}
