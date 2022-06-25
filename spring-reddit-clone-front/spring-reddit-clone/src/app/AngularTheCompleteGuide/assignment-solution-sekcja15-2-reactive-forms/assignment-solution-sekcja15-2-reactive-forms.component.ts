import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from './custom-validators';

@Component({
  selector: 'app-assignment-solution-sekcja15-2-reactive-forms',
  templateUrl: './assignment-solution-sekcja15-2-reactive-forms.component.html',
  styleUrls: ['./assignment-solution-sekcja15-2-reactive-forms.component.css']
})

export class AssignmentSolutionSekcja152ReactiveFormsComponent implements OnInit {
  projectForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null,
                                 [Validators.required, CustomValidators.invalidProjectName],
                                               CustomValidators.asyncInvalidProjectName
      ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    });
  }

  onSaveProject() {
    console.log(this.projectForm.value);
  }
}
