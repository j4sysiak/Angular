import { Component, OnInit } from '@angular/core';
import {PolicyModel} from '../policy-model';
import {PolicyService} from '../policy.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view-search-policies',
  templateUrl: './view-search-policies.component.html',
  styleUrls: ['./view-search-policies.component.css']
})
export class ViewSearchPoliciesComponent implements OnInit {

  policies: PolicyModel[] = [];
  searchMode: boolean;

  constructor(private policyService: PolicyService,
              private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(() => {
      this.listPoliciesByKeword();
    });
  }

  private listPoliciesByKeword() {
    this.searchMode = this.activateRoute.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      console.log('this.searchMode = ' + this.searchMode);
      const theKeyword: string = this.activateRoute.snapshot.paramMap.get('keyword');
      console.log('theKeyword = ' + theKeyword);
      this.policyService.getPoliciesByKeyword(theKeyword).subscribe(data => {
        this.policies = data;
      });
    }
  }

  updatePolicy(id: number) {
    console.log('(ViewSearchPoliciesComponent) update policy: ', id);
    // console.log(`update policy: ${id}`);
    // this.router.navigate(['policies-data', id]);
    this.router.navigateByUrl('/policies-data/' + id);
  }

  deletePolicy(id: number) {
    if(!confirm('Are you sure?')) {
      return;
    }
    console.log('(ViewSearchPoliciesComponent) delete policy: ', id);
    // lub console.log(`delete policy: ${id}`);
    this.policyService.deletePolicy(id).subscribe(
      response => {
        this.router.navigate(['/']);
      }
    );
  }
}
