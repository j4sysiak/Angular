import { Component, OnInit } from '@angular/core';
import {RootObject} from "../service/root-object";
import {CurrencyClientService} from "../service/currency-client.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  name: string;
  messageforUser: string;
  rootObject: RootObject;
  result: string;

  constructor(private currencyClientService : CurrencyClientService) {
  }

  ngOnInit(): void {
    this.currencyClientService.getCurrency().subscribe(value => {
      this.rootObject = value;
    });
  }

  sayHello(value: string) {
    this.messageforUser = "Cześć " + value;
  }

  check(value: number) {
    if (value > this.rootObject.rates.EUR) {
      this.result = 'podałeś za dużo';
    } else if (value <= this.rootObject.rates.FJD) {
      this.result = 'podałeś za mało';
    } else {
      this.result = 'udało się!';
    }
  }
}
