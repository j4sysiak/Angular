import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = '';
  public greetings = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event) {
    console.log(event);
    // this.greetings = 'Welkomen in TestComponent!!!';
    this.greetings = event.type;
  }
}
