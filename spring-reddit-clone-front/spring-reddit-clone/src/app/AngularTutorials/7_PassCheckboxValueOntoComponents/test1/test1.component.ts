import { Component, OnInit } from '@angular/core';
import {MyEventService} from '../my-event.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  checboxTest1: boolean;

  constructor(private myEventService: MyEventService) { }

  ngOnInit() {
    this.myEventService.checkBoxSubject$.subscribe(res => {
      this.checboxTest1 = res;
    });
  }
}
