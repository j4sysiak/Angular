import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-solution2',
  templateUrl: './assignment-solution2.component.html',
  styleUrls: ['./assignment-solution2.component.css']
})
export class AssignmentSolution2Component implements OnInit {
  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}

























