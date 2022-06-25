import {Component, OnDestroy, OnInit} from '@angular/core';
import {ObservablesUserService} from './observables-user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-assignment-observables',
  templateUrl: './assignment-observables.component.html',
  styleUrls: ['./assignment-observables.component.css']
})
export class AssignmentObservablesComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;

  constructor(private observablesUserService: ObservablesUserService) { }

  ngOnInit(): void {
    this.activatedSub = this.observablesUserService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }

}
