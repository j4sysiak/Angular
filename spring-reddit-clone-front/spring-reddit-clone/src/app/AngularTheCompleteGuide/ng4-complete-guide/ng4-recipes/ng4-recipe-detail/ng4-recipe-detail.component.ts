import {Component, OnInit} from '@angular/core';
import {Ng4Recipe} from '../ng4-recipe.model';
import {Ng4RecipeService} from '../ng4-recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ng4-recipe-detail',
  templateUrl: './ng4-recipe-detail.component.html',
  styleUrls: ['./ng4-recipe-detail.component.css']
})
export class Ng4RecipeDetailComponent implements OnInit {
  recipe: Ng4Recipe;
  id: number;

  constructor(private recipeService: Ng4RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];
    this.route.params
      .subscribe(
        (params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    // this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
