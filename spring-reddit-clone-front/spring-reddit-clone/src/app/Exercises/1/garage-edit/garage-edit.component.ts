import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {GarageService} from '../shared/garage.service';

@Component({
  selector: 'app-garage-edit',
  templateUrl: './garage-edit.component.html',
  styleUrls: ['./garage-edit.component.css']
})
export class GarageEditComponent implements OnInit {
  id: number;
  editMode = false;
  garageForm: FormGroup;

  constructor(private garageService: GarageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          // console.log(this.editMode);
          this.initForm();
        }
      );
  }

  private initForm() {
    let garageName = '';
    let garageDescription = '';
    let garageCars = new FormArray([]);

    if (this.editMode) {
      const garage = this.garageService.getGarage(this.id);
      console.log(garage);
      garageName = garage.name;
      garageDescription = garage.description;

      if (garage['cars']) {
        for (let car of garage.cars) {
          garageCars.push(
            new FormGroup({
              'make': new FormControl(car.make),
              'type': new FormControl(car.type),
              'year': new FormControl(car.year)
            })
          );
        }
      }
    }

    this.garageForm = new FormGroup({
      'name': new FormControl(garageName),
      'description': new FormControl(garageDescription),
      'cars': garageCars
    });
  }

  onSubmit() {
    console.log(this.garageForm);
    // const newGarage = new Garage(
    //   this.garageForm.value['name'],
    //   this.garageForm.value['description'],
    //   this.garageForm.value['cars']);

    if (this.editMode) {
      this.garageService.updateGarage(this.id, this.garageForm.value);
    } else {
      this.garageService.addGarage(this.garageForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteCar(i: number) {
  }

  onAddCar() {
    (<FormArray> this.garageForm.get('cars')).push(
      new FormGroup({
        'make': new FormControl(null),
        'type': new FormControl(null),
        'year': new FormControl(null)
      })
    );
  }

  get carCtrl() {
    return (this.garageForm.get('cars') as FormArray).controls;
  }

  get controls() {
    return (<FormArray> this.garageForm.get('cars')).controls;
  }


}
