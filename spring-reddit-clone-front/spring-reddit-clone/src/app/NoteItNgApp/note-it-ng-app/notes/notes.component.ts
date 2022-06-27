import { Component, OnInit } from '@angular/core';
import {Notebook} from "./model/notebook";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {
  notebooks: Notebook[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllNotebooks();
  }

  public getAllNotebooks() {
    // getting  data from backend
    // obsługa w service  /shared/api.service.ts
    this.apiService.getAllNotebooks().subscribe(
      response => {
        this.notebooks = response;
      },
      err => {
        alert("An error has occurred");
      }
    );
  }
}
