import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {Ng4Recipe} from '../ng4-recipe.model';
import {Ng4RecipeService} from '../ng4-recipe.service';

@Component({
  selector: 'app-ng4-recipe-list',
  templateUrl: './ng4-recipe-list.component.html',
  styleUrls: ['./ng4-recipe-list.component.css']
})
export class Ng4RecipeListComponent implements OnInit , OnDestroy {
  recipes: Ng4Recipe[] = [];
  subscription: Subscription;

  constructor(private recipeService: Ng4RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        // @ts-ignore
        (recipes: Ng4Recipe[]) => {
          this.recipes = recipes;
        });
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
























