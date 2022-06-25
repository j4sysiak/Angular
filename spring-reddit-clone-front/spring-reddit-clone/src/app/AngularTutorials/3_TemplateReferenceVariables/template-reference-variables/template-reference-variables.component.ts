import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables',
  templateUrl: './template-reference-variables.component.html',
  styleUrls: ['./template-reference-variables.component.css']
})
export class TemplateReferenceVariablesComponent implements OnInit {
  public name: string;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Jacek';
  }

  logMessage1(value) {
    console.warn(value);
  }

  logMessage2(value) {
    console.warn(value);
  }
}
