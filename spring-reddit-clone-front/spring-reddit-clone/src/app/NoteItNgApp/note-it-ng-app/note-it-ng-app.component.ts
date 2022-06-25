import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-it-ng-app',
  templateUrl: './note-it-ng-app.component.html',
  styleUrls: ['./note-it-ng-app.component.css']
})
export class NoteItNgAppComponent implements OnInit {
  title = 'NoteItNgApp';

  constructor() { }

  ngOnInit(): void {
  }

}
