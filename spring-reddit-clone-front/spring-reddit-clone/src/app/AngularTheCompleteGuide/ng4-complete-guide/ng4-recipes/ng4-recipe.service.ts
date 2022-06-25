import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Ng4Recipe} from './ng4-recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Ng4ShoppingListService} from '../ng4-shopping-list/ng4-shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class Ng4RecipeService {
  // recipeSelected = new EventEmitter<Ng4Recipe>();
  // recipeSelected = new Subject<Ng4Recipe>();
  recipesChanged = new Subject<Ng4Recipe>();
  private recipes: Ng4Recipe[] = [];

  // private recipes: Ng4Recipe[] = [
  //   new Ng4Recipe(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French Fries', 20)
  //     ]),
  //   new Ng4Recipe('Big Fat Burger',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Meat', 1)
  //     ])
  // ];

  constructor(private shoppingListService: Ng4ShoppingListService) {
  }

  setRecipes(recipes: Ng4Recipe[]) {
    this.recipes = recipes;
    // @ts-ignore
    this.recipesChanged.next(this.recipes.slice());
  }


  getRecipes() {
    return this.recipes.slice();
  }


  getRecipe(index: number) {
    // return this.recipes.slice()[index];
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Ng4Recipe) {
    this.recipes.push(recipe);
    // @ts-ignore
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Ng4Recipe) {
    this.recipes[index] = newRecipe;
    // @ts-ignore
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    // @ts-ignore
    this.recipesChanged.next(this.recipes.slice());
  }

}
