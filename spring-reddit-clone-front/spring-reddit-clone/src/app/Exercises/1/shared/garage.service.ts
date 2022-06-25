import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

import {Garage} from './garage.model';
import {Car} from './car.model';
import {CarsService} from './cars.service';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  garageChanged = new Subject<Garage>();
  private garages: Garage[] = [];

  constructor(private carService: CarsService) { }

  getGarages() {
    return this.garages.slice();
  }

  getGarage(i: number) {
    // return this.garages.slice()[i];
    return this.garages[i];
  }

  addGarage(garage: Garage) {
    this.garages.push(garage);
    // @ts-ignore
    this.garageChanged.next(this.garages.slice());
  }

  updateGarage(i: number, newGarage: Garage) {
    this.garages[i] = newGarage;
    // @ts-ignore
    this.garageChanged.next(this.garages.slice());
  }

  setGarages(garages: Garage[]) {
    this.garages = garages;
    // @ts-ignore
    this.garageChanged.next(this.garages.slice());
  }

  deleteGarage(i: number) {
    this.garages.splice(i, 1);
    // @ts-ignore
    this.garageChanged.next(this.garages.slice());
  }

  addCarsToCarList(cars: Car[]) {
    this.carService.addCars(cars);
  }

}
