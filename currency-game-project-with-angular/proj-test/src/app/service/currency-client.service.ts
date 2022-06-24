import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {RootObject} from "./root-object";

@Injectable({
  providedIn: 'root'
})
export class CurrencyClientService {

  constructor(private httpClient : HttpClient) {}

  public getCurrency(): Observable<RootObject> {
    return this.httpClient.get<RootObject>('https://api.exchangerate.host/latest');
  }
}



export default class namespace {
}
