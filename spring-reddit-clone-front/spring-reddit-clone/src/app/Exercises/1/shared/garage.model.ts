import {Car} from './car.model';

export class Garage {
  public name: string;
  public description: string;
  public cars: Car[];

  constructor(name: string, desc: string, cars: Car[]) {
    this.name = name;
    this.description = desc;
    this.cars = cars;
  }
}
