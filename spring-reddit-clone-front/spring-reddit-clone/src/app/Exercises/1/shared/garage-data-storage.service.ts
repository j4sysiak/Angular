import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ng4RecipeService} from '../../../AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe.service';
import {Ng4AuthService} from '../../../AngularTheCompleteGuide/ng4-complete-guide/ng4-auth/ng4-auth.service';
import {Ng4Recipe} from '../../../AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe.model';
import {map, tap} from 'rxjs/operators';
import {GarageService} from './garage.service';
import {Garage} from './garage.model';

@Injectable({
  providedIn: 'root'
})
export class GarageDataStorageService {

  constructor(
    private http: HttpClient,
    private garageService: GarageService
  ) {}

  storeGarages() {
    const garages = this.garageService.getGarages();
    return this.http.put('https://ng4-complete-guide-21-12-2021-default-rtdb.firebaseio.com/recipes.json', garages)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchGarages() {
    return this.http.get<Garage[]>(
      'https://ng4-complete-guide-21-12-2021-default-rtdb.firebaseio.com/recipes.json'
    ).pipe(
      map(garages => {
        return garages.map(garage => {
          return {
            ...garage,
            cars: garage.cars ? garage.cars : []
          };
        });
      }),
      tap(garages => {
        this.garageService.setGarages(garages);
      })
    );
  }
}








