import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Ng4RecipesComponent} from './ng4-recipes.component';
import {Ng4RecipeStartComponent} from './ng4-recipe-start/ng4-recipe-start.component';
import {Ng4RecipeEditComponent} from './ng4-recipe-edit/ng4-recipe-edit.component';
import {Ng4RecipeDetailComponent} from './ng4-recipe-detail/ng4-recipe-detail.component';
import {Ng4RecipesResolverService} from './ng4-recipes-resolver.service';

const ng4routes: Routes = [
  {
    path: '',
    component: Ng4RecipesComponent,
    // canActivate: [Ng4AuthGuard],  // wywalam to, bo po odświeżeniu trzeba się od nowa logować
    children: [
      { path: '', component: Ng4RecipeStartComponent },
      { path: 'new', component: Ng4RecipeEditComponent },
      {
        path: ':id',
        component: Ng4RecipeDetailComponent,
        resolve: [Ng4RecipesResolverService]
      },
      {
        path: ':id/edit',
        component: Ng4RecipeEditComponent,
        resolve: [Ng4RecipesResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ng4routes)],
  exports: [RouterModule]
})
export class Ng4RecipesRoutingModule {}
