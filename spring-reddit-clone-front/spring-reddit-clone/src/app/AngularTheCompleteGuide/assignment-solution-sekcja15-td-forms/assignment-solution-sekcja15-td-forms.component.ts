import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-assignment-solution-sekcja15-td-forms',
  templateUrl: './assignment-solution-sekcja15-td-forms.component.html',
  styleUrls: ['./assignment-solution-sekcja15-td-forms.component.css']
})
export class AssignmentSolutionSekcja15TdFormsComponent implements OnInit {
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';
  @ViewChild('signupForm') sgnForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.sgnForm.value);
  }
}
