import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Notebook} from "./model/notebook";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {
  notebooks: Notebook[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllNotebooks();
  }

  public getAllNotebooks() {
    let url =  "http://localhost:8080/api/notebooks/all";
    this.httpClient.get<Notebook[]>(url).subscribe(
      response => {
        this.notebooks = response;
      },
      err => {
        alert("An error has occured");
      }
    );
  }
}
