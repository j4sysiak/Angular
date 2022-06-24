import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  name: string;

  constructor() {
    this.name = 'Jacek';
  }

  ngOnInit(): void {
  }

}
