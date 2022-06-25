import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input-data-we2',
  templateUrl: './input-data-we2.component.html',
  styleUrls: ['./input-data-we2.component.css']
})
export class InputDataWe2Component {
  public nameForm: FormGroup;
  myusername = '';

  constructor( private formBuilder: FormBuilder) {
    this.nameForm = this.formBuilder.group({
      name: ''
    });
  }
  clickme() {
    this.myusername  = this.nameForm.get('name')?.value;
    console.log('it does nothing', this.nameForm.get('name'));
  }
}
