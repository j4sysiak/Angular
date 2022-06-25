import {EventEmitter, Injectable} from '@angular/core';
import {Car} from './car.model';
import {Subject} from 'rxjs';
import {Ingredient} from '../../../AngularTheCompleteGuide/ng4-complete-guide/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  carsChanged1 = new EventEmitter<Car[]>();
  carsChanged2 = new Subject<Car[]>();
  startedEditing = new Subject<number>();

  private cars: Car[] = [
    new Car('Toyota', 'Yaris', '2003'),
    new Car('Toyota', 'RAV4', '2006'),
    new Car('Audi', 'B4', '1992')
  ];

  constructor() {
  }

  getCars() {
    return this.cars.slice();
  }

  getCar(i: number) {
    return this.cars[i];
  }

  addCar(car: Car) {
    this.cars.push(car);
    this.carsChanged2.next(this.cars.slice());
  }

  updateCar(i: number, newCar: Car) {
    this.cars[i] = newCar;
    this.carsChanged2.next(this.cars.slice());
  }

  deleteCar(i: number) {
    this.cars.splice(i, 1);
    this.carsChanged2.next(this.cars.slice());
  }

  addCars(cars: Car[]) {
    // for (let car of cars) {
    //   this.addCar(car);
    // }
    this.cars.push(...cars);
    this.carsChanged2.next(this.cars.slice());
  }
}
