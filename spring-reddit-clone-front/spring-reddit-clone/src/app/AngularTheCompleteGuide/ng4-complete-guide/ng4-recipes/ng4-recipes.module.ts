import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {Ng4RecipesComponent} from './ng4-recipes.component';
import {Ng4RecipeListComponent} from './ng4-recipe-list/ng4-recipe-list.component';
import {Ng4RecipeDetailComponent} from './ng4-recipe-detail/ng4-recipe-detail.component';
import {Ng4RecipeItemComponent} from './ng4-recipe-list/ng4-recipe-item/ng4-recipe-item.component';
import {Ng4RecipeStartComponent} from './ng4-recipe-start/ng4-recipe-start.component';
import {Ng4RecipeEditComponent} from './ng4-recipe-edit/ng4-recipe-edit.component';
import {Ng4RecipesRoutingModule} from './ng4-recipes-routing.module';
import {Ng4SharedModule} from '../shared/ng4-shared.module';


@NgModule({
  declarations: [
    Ng4RecipesComponent,
    Ng4RecipeListComponent,
    Ng4RecipeDetailComponent,
    Ng4RecipeItemComponent,
    Ng4RecipeStartComponent,
    Ng4RecipeEditComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    Ng4RecipesRoutingModule,
    Ng4SharedModule
  ]
  // exports: [
  //   Ng4RecipesComponent,
  //   Ng4RecipeListComponent,
  //   Ng4RecipeDetailComponent,
  //   Ng4RecipeItemComponent,
  //   Ng4RecipeStartComponent,
  //   Ng4RecipeEditComponent
  // ]
})
export class Ng4RecipesModule {}
