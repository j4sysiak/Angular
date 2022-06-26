import { Component, OnInit } from '@angular/core';
import {FeedbackViewModel} from "./FeedbackViewModel";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  // ten model odpowiada modelowi w backendzie: FeedbackViewModel.java
  // musimy zrobić binding tych pól z formularzem html (feedback.component.html)
  // używamy składni Template Driven Model:  [(ngModel)]="model.xxxx", gdzie xxx może być: name, email, feedback
  model: FeedbackViewModel = {
    name: '',
    email: '',
    feedback: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  sendFeedback(): void {
    alert(this.model.name);
  }
}
