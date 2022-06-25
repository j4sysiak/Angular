import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng4-loading-spinner',
  template:
    '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./ng4-loading-spinner.component.css']
})
export class Ng4LoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
