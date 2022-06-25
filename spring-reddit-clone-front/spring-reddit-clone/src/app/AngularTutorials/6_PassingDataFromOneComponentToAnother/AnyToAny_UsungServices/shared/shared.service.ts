import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message = '';

  constructor() { }

  setMessage(data) {
    this.message = data;
    console.warn(this.message);
  }

  getMessage() {
    console.warn(this.message);
    return this.message;
  }
}
