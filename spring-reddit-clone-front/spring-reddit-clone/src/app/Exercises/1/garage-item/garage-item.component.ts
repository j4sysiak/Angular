import {Component, Input, OnInit} from '@angular/core';

import {Garage} from '../shared/garage.model';

@Component({
  selector: 'app-garage-item',
  templateUrl: './garage-item.component.html',
  styleUrls: ['./garage-item.component.css']
})
export class GarageItemComponent implements OnInit {
  @Input() garage: Garage;
  @Input() index: number;

  ngOnInit(): void {
  }
}
