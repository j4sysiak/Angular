import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {
  message = 'Message from Child4';

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.setMessage(this.message);
  }

}
