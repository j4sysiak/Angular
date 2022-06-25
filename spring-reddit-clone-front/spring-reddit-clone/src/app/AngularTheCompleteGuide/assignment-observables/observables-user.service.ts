import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesUserService {
  // activatedEmitter = new EventEmitter<boolean>();
     activatedEmitter = new Subject<boolean>();

  constructor() { }
}
