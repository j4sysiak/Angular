import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

import {Car} from '../shared/car.model';
import {CarsService} from '../shared/cars.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) carEditForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Car;

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.subscription = this.carsService.startedEditing
      .subscribe((i: number) => {
        this.editedItemIndex = i;
        this.editMode = true;
        this.editedItem = this.carsService.getCar(i);

        this.carEditForm.setValue({
          make: this.editedItem.make,
          type: this.editedItem.type,
          year: this.editedItem.year
        });
      });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newCar = new Car(value.make, value.type, value.year);
    // this.ingredientAdded.emit(newIngredient);
    if (this.editMode) {
      this.carsService.updateCar(this.editedItemIndex, newCar);
    } else {
      this.carsService.addCar(newCar);
    }
    this.editMode = false;
    form.reset();
  }

  onDelete() {
    this.carsService.deleteCar(this.editedItemIndex);
    this.onClear();
  }

  onClear() {
    this.carEditForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
