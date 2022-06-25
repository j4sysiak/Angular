import {Component, OnInit} from '@angular/core';
import {PolicyModel} from '../policy-model';
import {PolicyService} from '../policy.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-list-policy',
  templateUrl: './list-policy.component.html',
  styleUrls: ['./list-policy.component.css']
})
export class ListPolicyComponent implements OnInit {

  policies: Array<PolicyModel>;

  constructor(private policyService: PolicyService) { }

  ngOnInit() {
    this.policyService.getAllPolicies().subscribe(data => {
      this.policies = data;
    }, error => {
      throwError(error);
    });
  }

}
