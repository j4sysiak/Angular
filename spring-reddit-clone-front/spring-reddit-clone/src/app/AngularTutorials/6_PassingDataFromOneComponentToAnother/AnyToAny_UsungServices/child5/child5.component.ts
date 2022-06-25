import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements OnInit {
  message: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    console.warn('jestem w ngOnInit w Child5Component');
    this.message = this.sharedService.getMessage();
    console.warn('AAAA');
    console.warn(this.message);
  }

}
