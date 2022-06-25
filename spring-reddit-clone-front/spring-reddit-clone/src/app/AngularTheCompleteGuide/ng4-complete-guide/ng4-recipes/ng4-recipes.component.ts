import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng4-recipes',
  templateUrl: './ng4-recipes.component.html',
  styleUrls: ['./ng4-recipes.component.css']
})
export class Ng4RecipesComponent implements OnInit {
  // selectedRecipe: Ng4Recipe;

  // constructor(private recipeService: Ng4RecipeService) { }
  constructor() { }

  ngOnInit(): void {
    // this.recipeService.recipeSelected
    //   .subscribe(
    //     (recipe: Ng4Recipe) => {
    //       this.selectedRecipe = recipe;
    //     }
    //   );
  }

}
