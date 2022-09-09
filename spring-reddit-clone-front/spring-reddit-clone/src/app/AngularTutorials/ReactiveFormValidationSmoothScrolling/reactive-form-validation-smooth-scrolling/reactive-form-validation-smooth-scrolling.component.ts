import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-validation-smooth-scrolling',
  templateUrl: './reactive-form-validation-smooth-scrolling.component.html',
  styleUrls: ['./reactive-form-validation-smooth-scrolling.component.css']
})
export class ReactiveFormValidationSmoothScrollingComponent implements OnInit {
  signUpForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{3,}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      // validator: this.mustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.signUpForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.signUpForm.invalid) {
      this.scrollToError();
    }else {
      console.log("Complete");
    }
  }

  scrollTo(el: Element): void {
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  scrollToError(): void {
    const firstElementWithError = document.querySelector('.ng-invalid[formControlName]');
    console.log("aa:", firstElementWithError);

    this.scrollTo(firstElementWithError);
  }

  // mustMatch(controlName: string, matchingControlName: string) {
  //   return (formGroup: FormGroup) => {
  //     const control = formGroup.controls[controlName];
  //     const matchingControl = formGroup.controls[matchingControlName];
  //
  //     if (matchingControl.errors && !matchingControl.errors.mustMatch) {
  //       // return if another validator has already found an error on the matchingControl
  //       return;
  //     }
  //
  //     // set error on matchingControl if validation fails
  //     if (control.value !== matchingControl.value) {
  //       matchingControl.setErrors({ mustMatch: true });
  //     } else {
  //       matchingControl.setErrors(null);
  //     }
  //   }
  // }
}
