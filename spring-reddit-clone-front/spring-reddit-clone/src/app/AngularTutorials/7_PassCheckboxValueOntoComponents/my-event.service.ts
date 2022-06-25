import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyEventService {

  checkBoxSubject$ = new BehaviorSubject<boolean>(null);

  constructor() { }
}
