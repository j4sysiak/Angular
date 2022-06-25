import { Component, OnInit } from '@angular/core';

import {Garage} from '../shared/garage.model';
import {ActivatedRoute, Router} from '@angular/router';
import {GarageService} from '../shared/garage.service';
import {Ng4Recipe} from '../../../AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe.model';
import {Subscription} from 'rxjs';
import {Ng4RecipeService} from '../../../AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe.service';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.css']
})
export class GarageListComponent implements OnInit {
  garages: Garage[] = [];
  subscription: Subscription;

  constructor(private garageService: GarageService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.garageService.garageChanged
      .subscribe(
        // @ts-ignore
        (garages: Garage[]) => {
          this.garages = garages;
        });
    this.garages = this.garageService.getGarages();
  }

  onNewGarage() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
