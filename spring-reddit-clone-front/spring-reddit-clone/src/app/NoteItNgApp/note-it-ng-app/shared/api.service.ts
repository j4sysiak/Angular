import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Notebook} from "../notes/model/notebook";
import {FeedbackViewModel} from "../feedback/FeedbackViewModel";
import {Note} from "../notes/model/note";

// klas Service to Singleton
//ta anotacja umożliwia wstrzykiwanie obiektu tej klasy do innych klsa
//Angular Dependecy Injection
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = "http://localhost:8080/api";
  public  ALL_NOTEBOOKS_URL =  `${this.BASE_URL}\\notebooks\\all`; // public na potrzeby testów:  api.service.spec.ts
  private SEND_FEEDBACK_URL =  `${this.BASE_URL}\\feedback`;
  private SEND_UPDATE_NOTEBOOK =  `${this.BASE_URL}\\notebooks`;
  private DELETE_NOTEBOOK_URL =  `${this.BASE_URL}\\notebooks\\`;
  private ALL_NOTES_URL =  `${this.BASE_URL}\\notes\\all`;
  private NOTES_BY_NOTEBOOK_URL =  `${this.BASE_URL}\\notes\\byNotebook\\`;
  private SAVE_UPDATE_NOTE_URL =  `${this.BASE_URL}\\notes`;
  private DELETE_NOTE_URL =  `${this.BASE_URL}\\notes\\`;

  constructor(private httpClient: HttpClient) {}

  getAllNotebooks() : Observable<Notebook[]> {
    return this.httpClient.get<Notebook[]>(this.ALL_NOTEBOOKS_URL);
  }

  postFeedback(feedbackViewModel: FeedbackViewModel) : Observable<any> {
    return this.httpClient.post(this.SEND_FEEDBACK_URL, feedbackViewModel);
  }

  postNotebook(notebook: Notebook) : Observable<Notebook> {
    return this.httpClient.post<Notebook>(this.SEND_UPDATE_NOTEBOOK, notebook);
  }

  deleteNotebook(id: String) : Observable<any> {
    return this.httpClient.delete(this.DELETE_NOTEBOOK_URL + id);
  }

  getAllNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(this.ALL_NOTES_URL);
  }

  getNotesByNotebook(notebookId: string): Observable<Note[]> {
    return this.httpClient.get<Note[]>(this.NOTES_BY_NOTEBOOK_URL + notebookId);
  }

  saveNotes(note: Note): Observable<Note> {
    return this.httpClient.post<Note>(this.SAVE_UPDATE_NOTE_URL, note);
  }

  deleteNote(noteId: string) : Observable<any> {
    return this.httpClient.delete(this.DELETE_NOTE_URL + noteId);
  }
}
