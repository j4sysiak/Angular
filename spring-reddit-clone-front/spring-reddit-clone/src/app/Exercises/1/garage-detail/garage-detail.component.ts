import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {GarageService} from '../shared/garage.service';
import {Garage} from '../shared/garage.model';

@Component({
  selector: 'app-garage-detail',
  templateUrl: './garage-detail.component.html',
  styleUrls: ['./garage-detail.component.css']
})
export class GarageDetailComponent implements OnInit {
  garage: Garage;
  id: number;

  constructor(private garageService: GarageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];
    this.route.params
      .subscribe(
        (params) => {
          this.id = +params['id'];
          this.garage = this.garageService.getGarage(this.id);
        }
      );
  }

  onAddToCarList() {
    this.garageService.addCarsToCarList(this.garage.cars);
  }

  onEditRecipe() {
    // this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    // this.garageService.deleteGarage(this.id);
    // this.router.navigate(['/garage']);
  }
}
