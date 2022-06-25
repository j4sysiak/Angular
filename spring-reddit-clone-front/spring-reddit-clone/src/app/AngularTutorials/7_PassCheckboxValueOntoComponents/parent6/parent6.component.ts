import { Component, OnInit } from '@angular/core';
import {MyEventService} from '../my-event.service';

@Component({
  selector: 'app-parent6',
  templateUrl: './parent6.component.html',
  styleUrls: ['./parent6.component.css']
})
export class Parent6Component implements OnInit {
  name = 'Angular';
  myCheckBox = true;

  constructor(private myEventService: MyEventService) { }

  ngOnInit(): void {
  }

  onChange() {
    this.myEventService.checkBoxSubject$.next(this.myCheckBox);
  }

}
