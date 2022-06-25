import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Car} from '../shared/car.model';
import {CarsService} from '../shared/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  private subscription: Subscription;
  cars: Car[];

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.cars = this.carsService.getCars();

    this.subscription = this.carsService.carsChanged2
      .subscribe(
        (cars: Car[]) => {
          this.cars = cars;
        }
      );
  }

  onEditItem(i: number) {
    this.carsService.startedEditing.next(i);
  }
}
