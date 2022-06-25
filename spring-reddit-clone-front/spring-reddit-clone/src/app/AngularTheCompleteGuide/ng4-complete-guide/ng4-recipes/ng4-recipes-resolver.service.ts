import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Ng4Recipe} from './ng4-recipe.model';
import {Observable} from 'rxjs';
import {DataStorageService} from '../shared/data-storage.service';
import {Ng4RecipeService} from './ng4-recipe.service';

@Injectable({
  providedIn: 'root'
})
export class Ng4RecipesResolverService implements Resolve<Ng4Recipe[]> {

  constructor(private dataStorageService: DataStorageService, private recipeService: Ng4RecipeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ng4Recipe[]> | Promise<Ng4Recipe[]> | Ng4Recipe[] {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
