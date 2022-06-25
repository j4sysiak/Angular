import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Ng4Recipe} from '../ng4-recipes/ng4-recipe.model';
import {Ng4RecipeService} from '../ng4-recipes/ng4-recipe.service';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {Ng4AuthService} from '../ng4-auth/ng4-auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private recipeService: Ng4RecipeService,
    private authService: Ng4AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://ng4-complete-guide-21-12-2021-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {

      return this.http.get<Ng4Recipe[]>(
          'https://ng4-complete-guide-21-12-2021-default-rtdb.firebaseio.com/recipes.json'
        ).pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}


























