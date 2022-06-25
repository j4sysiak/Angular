import {Component, OnInit} from '@angular/core';
import {PolicyService} from '../../policy/policy.service';
import {PolicyModel} from '../../policy/policy-model';

@Component({
  selector: 'app-policy-side-bar',
  templateUrl: './policy-side-bar.component.html',
  styleUrls: ['./policy-side-bar.component.css']
})
export class PolicySideBarComponent implements OnInit {

  policies: Array<PolicyModel> = [];

  constructor(private policyService: PolicyService) {
    this.policyService.getAllPolicies().subscribe(data => {
      this.policies = data;
    });
  }

  ngOnInit(): void {
  }

}
