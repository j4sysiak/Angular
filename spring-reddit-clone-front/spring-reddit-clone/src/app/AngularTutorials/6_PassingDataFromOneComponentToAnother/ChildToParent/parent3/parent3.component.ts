import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

  reciveMessageFromChild3($event) {
    this.message = $event;
    console.warn(this.message);
  }
}
