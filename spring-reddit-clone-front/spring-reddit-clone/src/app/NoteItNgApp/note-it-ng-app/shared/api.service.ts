import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Notebook} from "../notes/model/notebook";
import {FeedbackViewModel} from "../feedback/FeedbackViewModel";

// klas Service to Singleton
//ta anotacja umożliwia wstrzykiwanie obiektu tej klasy do innych klsa
//Angular Dependecy Injection
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = "http://localhost:8080/api";
  private ALL_NOTEBOOKS_URL =  `${this.BASE_URL}\\notebooks\\all`;
  private SEND_FEEDBACK_URL =  `${this.BASE_URL}\\feedback`;

  constructor(private httpClient: HttpClient) {}

  getAllNotebooks() : Observable<Notebook[]> {
    return null;
  }

  postFeedback(feedbackViewModel: FeedbackViewModel) : Observable<any> {
    return null;
  }
}
