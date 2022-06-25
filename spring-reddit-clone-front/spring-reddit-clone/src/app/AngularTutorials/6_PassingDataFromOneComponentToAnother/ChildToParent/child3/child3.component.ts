import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  message = 'Message from Child to Parent3';

  constructor() { }

  @Output() event = new EventEmitter<string>();

  ngOnInit(): void {
  }

  sendMessageToParent() {
    this.event.emit(this.message);
  }

}
