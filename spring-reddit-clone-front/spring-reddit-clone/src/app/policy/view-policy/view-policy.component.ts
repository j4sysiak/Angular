import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {throwError} from 'rxjs';

import {PolicyService} from '../policy.service';
import {PolicyModel} from '../policy-model';


@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrls: ['./view-policy.component.css']
})
export class ViewPolicyComponent implements OnInit {

  policyId: number;
  policy: PolicyModel = new PolicyModel;

  constructor(private policyService: PolicyService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
    this.policyId = this.activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getPolicyById();
  }

  getPolicyById() {
    this.policyService.getPolicyById(this.policyId).subscribe(data => {
      this.policy = data;
    }, error => {
      throwError(error);
    });
  }

  updatePolicy(id: number) {
    console.log('(ViewPolicyComponent) update policy: ', id);
    // console.log(`update policy: ${id}`);
    // this.router.navigate(['policies-data', id]);
    this.router.navigateByUrl('/policies-data/' + id);
  }

  deletePolicy(id: number) {
    if(!confirm('Are you sure?')) {
      return;
    }
    console.log('(ViewPolicyComponent) delete policy: ', id);
    // lub console.log(`delete policy: ${id}`);
    this.policyService.deletePolicy(id).subscribe(
      response => {
        this.router.navigate(['/']);
      }
    );
  }
}
