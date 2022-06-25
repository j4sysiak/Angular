import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child6',
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.css']
})
export class Child6Component implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
