import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Ng4Recipe} from '../../../AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe.model';
import {Ng4RecipeService} from '../../../AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe.service';
import {Observable} from 'rxjs';
import {Garage} from './garage.model';
import {GarageDataStorageService} from './garage-data-storage.service';
import {GarageService} from './garage.service';

@Injectable({
  providedIn: 'root'
})
export class GarageResolverService implements Resolve<Garage[]> {

  constructor(private garageDataStorageService: GarageDataStorageService,
              private garageService: GarageService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Garage[]> | Promise<Garage[]> | Garage[] {
    const garages = this.garageService.getGarages();

    if (garages.length === 0) {
      return this.garageDataStorageService.fetchGarages();
    } else {
      return garages;
    }
  }
}
