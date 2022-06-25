import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent7',
  templateUrl: './parent7.component.html',
  styleUrls: ['./parent7.component.css']
})
export class Parent7Component implements OnInit {
  title = 'Parent7 Component';
  public name = 'Message from Parent7 to Child7';
  public messageFromChild = '';

  constructor() { }

  ngOnInit(): void {
  }

}
