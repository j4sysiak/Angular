import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-directives',
  templateUrl: './assignment-directives.component.html',
  styleUrls: ['./assignment-directives.component.css']
})
export class AssignmentDirectivesComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
