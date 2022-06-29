import { Component, OnInit } from '@angular/core';
import {Notebook} from "./model/notebook";
import {ApiService} from "../shared/api.service";
import {Note} from "./model/note";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {
  notebooks: Notebook[] = [];
  notes: Note[] = [];
  selectedNotebook: Notebook;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllNotebooks();
    this.getAllNotes();
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

  createNotebook() {
    let newNotebook : Notebook = {
      name: 'New notebook',
      id: null,
      nbOfNotes: 0
    }
    this.apiService.postNotebook(newNotebook).subscribe(
      response => {
        newNotebook.id = response.id;
        this.notebooks.push(newNotebook);
      },
      error => {
        alert("An error has occurred while create the notebook.");
      }
    );
  }

  updateNotebook(updatedNotebook: Notebook) {
    this.apiService.postNotebook(updatedNotebook).subscribe(
      response => {
        //nothing must be done
      },
      error => {
        alert("An error has occurred while update the notebook.");
      }
    );
  }

  deleteNotebook(notebook: Notebook) {
    if (confirm("Are You sure you want to delete notebook?")) {
      this.apiService.deleteNotebook(notebook.id).subscribe(
        response => {
          let indexOfNotebooks = this.notebooks.indexOf(notebook);
          this.notebooks.splice(indexOfNotebooks, 1);
        },
        error => {
          alert("Could not delete a notebook.");
        }
      );
    }
  }

  getAllNotes() {
     this.apiService.getAllNotes().subscribe(
       response => {
          this.notes = response;
       },
       error => {
         alert("Error occured while downloading the notes.");
       }
     );
  }

  getNotesByNotebook() {

  }

  deleteNote(note: Note) {

  }

  createNote(notebookId: string) {
    let newNote : Note = {
      id: null,
      title: "New Note",
      text: "Write some text in here",
      lastModifiedOn: null,
      notebookId: notebookId
    };
    this.apiService.saveNotes(newNote).subscribe(
      response => {
        newNote.id = response.id;
        this.notes.push(newNote);
      },
      error => {
        alert("An error has occurred while saving a note.");
      }
    );
  }

  selectNotebook(id: string) {
     this.selectedNotebook = notebook;
     // TODO: grab all the notes for this notebook only
  }
}
