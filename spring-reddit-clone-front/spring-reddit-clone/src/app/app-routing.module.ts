import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {UserProfileComponent} from './auth/user-profile/user-profile.component';
import {HomeComponent} from './home/home.component';
import {CreatePostComponent} from './post/create-post/create-post.component';
import {ViewPostComponent} from './post/view-post/view-post.component';
import {CreateSubredditComponent} from './subreddit/create-subreddit/create-subreddit.component';
import {ListSubredditsComponent} from './subreddit/list-subreddits/list-subreddits.component';
import {ViewSubredditComponent} from './subreddit/view-subreddit/view-subreddit.component';
import {ViewProductComponent} from './product/view-product/view-product.component';
import {ViewPolicyComponent} from './policy/view-policy/view-policy.component';
import {ViewSearchPoliciesComponent} from './policy/view-search-policies/view-search-policies.component';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {ListProductComponent} from './product/list-product/list-product.component';
import {CreatePolicyComponent} from './policy/create-policy/create-policy.component';
import {ListPolicyComponent} from './policy/list-policy/list-policy.component';
import {PolicyDataDetailsComponent} from './policy/policy-data-details/policy-data-details.component';
import {CreateBlogPostComponent} from './blog-post/create-blog-post/create-blog-post.component';
import {ViewBlogPostComponent} from './blog-post/view-blog-post/view-blog-post.component';
import {AuthGuard} from './auth/auth.guard';
import {HomeRoutingComponent} from './AngularTheCompleteGuide/assignment-routing/home-routing/home-routing.component';
import {UsersRoutingComponent} from './AngularTheCompleteGuide/assignment-routing/users-routing/users-routing.component';
import {ServersRoutingComponent} from './AngularTheCompleteGuide/assignment-routing/servers-routing/servers-routing.component';
import {UserRoutingComponent} from './AngularTheCompleteGuide/assignment-routing/users-routing/user-routing/user-routing.component';
import {ServerRoutingComponent} from './AngularTheCompleteGuide/assignment-routing/servers-routing/server-routing/server-routing.component';
import {EditServerRoutingComponent} from './AngularTheCompleteGuide/assignment-routing/servers-routing/edit-server-routing/edit-server-routing.component';
import {AuthRoutingGuardService} from './AngularTheCompleteGuide/assignment-routing/auth-routing-guard.service';
import {CanDeactivateRoutingGuardService} from './AngularTheCompleteGuide/assignment-routing/servers-routing/edit-server-routing/can-deactivate-routing-guard.service';
import {ErrorPageComponent} from './AngularTheCompleteGuide/assignment-routing/error-page/error-page.component';
import {ServerRoutingResolverService} from './AngularTheCompleteGuide/assignment-routing/servers-routing/server-routing/server-routing-resolver.service';
import {AssignmentObservablesHomeComponent} from './AngularTheCompleteGuide/assignment-observables/assignment-observables-home/assignment-observables-home.component';
import {AssignmentObservablesUserComponent} from './AngularTheCompleteGuide/assignment-observables/assignment-observables-user/assignment-observables-user.component';
import {AssignmentFormsComponent} from './AngularTheCompleteGuide/assignment-forms/assignment-forms.component';
import {AssignmentSolutionSekcja15TdFormsComponent} from './AngularTheCompleteGuide/assignment-solution-sekcja15-td-forms/assignment-solution-sekcja15-td-forms.component';
import {AssignmentSolutionSekcja15ReactiveFormsComponent} from './AngularTheCompleteGuide/assignment-solution-sekcja15-reactive-forms/assignment-solution-sekcja15-reactive-forms.component';
import {AssignmentSolutionSekcja152ReactiveFormsComponent} from './AngularTheCompleteGuide/assignment-solution-sekcja15-2-reactive-forms/assignment-solution-sekcja15-2-reactive-forms.component';
import {AssignmentSolutionSekcja17PipesComponent} from './AngularTheCompleteGuide/assignment-solution-sekcja17-pipes/assignment-solution-sekcja17-pipes.component';
import {AssignmentSolutionSekcja18HttpComponent} from './AngularTheCompleteGuide/assignment-solution-sekcja18-http/assignment-solution-sekcja18-http.component';
import {Ng4AuthComponent} from './AngularTheCompleteGuide/ng4-complete-guide/ng4-auth/ng4-auth.component';
import {Ng4ShoppingListModule} from './AngularTheCompleteGuide/ng4-complete-guide/ng4-shopping-list/ng4-shopping-list.module';
import {FeedbackComponent} from "./NoteItNgApp/note-it-ng-app/feedback/feedback.component";
import {NotesComponent} from "./NoteItNgApp/note-it-ng-app/notes/notes.component";
import {NotFoundComponent} from "./NoteItNgApp/note-it-ng-app/not-found/not-found.component";
import {CreateEmployeeComponent} from "./Angular-To-Docker-Example/employee/create-employee/create-employee.component";
import {EmployeeListComponent} from "./Angular-To-Docker-Example/employee/employee-list/employee-list.component";
import {UpdateEmployeeComponent} from "./Angular-To-Docker-Example/employee/update-employee/update-employee.component";
// import {Ng4RecipesResolverService} from './AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipes-resolver.service';
// import {Ng4AuthGuard} from './AngularTheCompleteGuide/ng4-complete-guide/ng4-auth/ng4-auth-guard';
// tslint:disable-next-line:max-line-length
// import {Ng4RecipeStartComponent} from './AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe-start/ng4-recipe-start.component';
// tslint:disable-next-line:max-line-length
// import {Ng4RecipeDetailComponent} from './AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe-detail/ng4-recipe-detail.component';
// tslint:disable-next-line:max-line-length
// import {Ng4RecipeEditComponent} from './AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe-edit/ng4-recipe-edit.component';
// import {AssignmentObservablesComponent} from './AngularTheCompleteGuide/assignment-observables/assignment-observables.component';
// import {PageNotFoundComponent} from './AngularTheCompleteGuide/assignment-routing/page-not-found/page-not-found.component';
// import {Ng4RecipesComponent} from './AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipes.component';
// import {Ng4ShoppingListComponent} from './AngularTheCompleteGuide/ng4-complete-guide/ng4-shopping-list/ng4-shopping-list.component';


const appRoutes: Routes = [
    // { path: '/', component: HomeComponent },   komentuje, bo dużo różnych aplikacji można będzie odpalać
    // { path: '', component: HomeComponent },    komentuje, bo dużo różnych aplikacji można będzie odpalać
    { path: 'home', component: HomeComponent },
    { path: 'view-post/:id', component: ViewPostComponent },
    { path: 'view-blog-post/:id', component: ViewBlogPostComponent },
    { path: 'user-profile/:name', component: UserProfileComponent /*, canActivate: [AuthGuard]*/ },
    { path: 'list-subreddits', component: ListSubredditsComponent },
    { path: 'list-product', component: ListProductComponent },
    { path: 'list-policy', component: ListPolicyComponent },
    { path: 'policies-data/:id', component: PolicyDataDetailsComponent},
    { path: 'view-subreddit/:id', component: ViewSubredditComponent },
    { path: 'view-product/:id', component: ViewProductComponent },
    { path: 'view-policy/:id', component: ViewPolicyComponent },
    { path: 'policy-data-details/:id', component: PolicyDataDetailsComponent},
    { path: 'search-policy/:keyword', component: ViewSearchPoliciesComponent },
    { path: 'create-blog-post', component: CreateBlogPostComponent, canActivate: [AuthGuard] },
    { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard] },
    { path: 'create-subreddit', component: CreateSubredditComponent, canActivate: [AuthGuard] },
    { path: 'create-product', component: CreateProductComponent, canActivate: [AuthGuard] },
    { path: 'create-policy', component: CreatePolicyComponent, canActivate: [AuthGuard] },
    { path: 'sign-up', component: SignupComponent },
    { path: 'login', component: LoginComponent },


    // aplikacja: app-assignment-routing
    { path: 'home-routing', component: HomeRoutingComponent },      /* localhost:4200/home-routing */
    { path: 'users-routing', component: UsersRoutingComponent, children: [
        { path: ':id/:name', component: UserRoutingComponent }
      ] },
    {
      path: 'servers-routing',
      // canActivate: [AuthRoutingGuardService],
      canActivateChild: [AuthRoutingGuardService],
      component: ServersRoutingComponent,
      children: [
        { path: ':id', component: ServerRoutingComponent, resolve: {serverRoutingResolverService: ServerRoutingResolverService} },
        { path: ':id/edit', component: EditServerRoutingComponent, canDeactivate: [CanDeactivateRoutingGuardService] }
      ] },
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    // { path: '**', redirectTo: '/not-found' },

     // aplikacja: app-assignment-observable
    { path: 'app-assignment-observables', redirectTo: '/observable', pathMatch: 'full' },
    { path: 'observable', component: AssignmentObservablesHomeComponent},
    { path: 'observable-user/:id', component: AssignmentObservablesUserComponent},

     // aplikacja: app-assignment-forms
     { path: 'app-assignment-forms', redirectTo: '/forms', pathMatch: 'full' },
     { path: 'forms', component: AssignmentFormsComponent },

     // aplikacja:  app-assignment-solution-sekcja15-td-forms
     { path: 'app-assignment-solution-sekcja15-td-forms', redirectTo: '/assignment-td-forms', pathMatch: 'full' },
     { path: 'assignment-td-forms', component: AssignmentSolutionSekcja15TdFormsComponent },

     // aplikacja:  app-assignment-solution-sekcja15-reactive-forms
     { path: 'app-assignment-solution-sekcja15-reactive-forms', redirectTo: '/assignment-reactive-forms', pathMatch: 'full' },
     { path: 'assignment-reactive-forms', component: AssignmentSolutionSekcja15ReactiveFormsComponent },

     // aplikacja: app-assignment-solution-sekcja15-2-reactive-forms
     { path: 'app-assignment-solution-sekcja15-2-reactive-forms', redirectTo: '/assignment-reactive-forms-2', pathMatch: 'full' },
     { path: 'assignment-reactive-forms-2', component: AssignmentSolutionSekcja152ReactiveFormsComponent },

     // aplikacja: app-assignment-solution-sekcja17-pipes
     { path: 'app-assignment-solution-sekcja17-pipes', redirectTo: '/assignment-pipes', pathMatch: 'full' },
     { path: 'assignment-pipes', component: AssignmentSolutionSekcja17PipesComponent },

     // aplikacja: app-assignment-solution-sekcja18-http
     { path: 'app-assignment-solution-sekcja18-http', redirectTo: '/assignment-https', pathMatch: 'full' },
     { path: 'assignment-https', component: AssignmentSolutionSekcja18HttpComponent },


     // aplikacja to ćwiczeń (Exercices: src/app/Exercises/1): app-garage
     { path: 'app-garage', redirectTo: '/garage', pathMatch: 'full'},
     { path: 'garage',
         loadChildren: () => import('./Exercises/1/shared/garage.module')
           .then(m => m.GarageModule)
     },
     { path: 'car',
         loadChildren: () => import('./Exercises/1/shared/cars.module')
      .then(m => m.CarsModule)
  },


  // aplikacja: ng4-complete-guide
    { path: 'ng4-complete-guide', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes',
        loadChildren: () => import('./AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipes.module')
          .then(m => m.Ng4RecipesModule)
    },
    { path: 'shopping-list',
        loadChildren: () => import('./AngularTheCompleteGuide/ng4-complete-guide/ng4-shopping-list/ng4-shopping-list.module')
          .then(m => m.Ng4ShoppingListModule)
    },
    { path: 'ng4-auth',
        loadChildren: () => import('./AngularTheCompleteGuide/ng4-complete-guide/ng4-auth/ng4-auth.module')
          .then(m => m.Ng4AuthModule)
    },


  // aplikacja: NoteIt
  //https://www.youtube.com/watch?v=YscGmaaEplo&list=PLVApX3evDwJ2keNFsQ4PhA1yVaXpto2oN&index=11
  { path: 'app-note-it-ng-app', component: NotesComponent, pathMatch: 'full'},
  { path: 'notes', component: NotesComponent },
  { path: 'feedback',  component: FeedbackComponent },
  { path: 'not-found', component: NotFoundComponent, data: {message: 'Page not found!'} },
  // { path: '**', component: NotFoundComponent },

  // aplikacja: Angular-To-Docker-Example
  { path: 'app-angular-to-docker', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent }
  ];



@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  // imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }












