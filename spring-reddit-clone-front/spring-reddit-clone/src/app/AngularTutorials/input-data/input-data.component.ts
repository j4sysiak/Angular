import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent  {

  username = '';
  clickme() {
    console.log('it does nothing', this.username);
  }

}
