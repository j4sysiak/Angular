import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { PostTileComponent } from './shared/post-tile/post-tile.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { SubredditSideBarComponent } from './shared/subreddit-side-bar/subreddit-side-bar.component';
import { VoteButtonComponent } from './shared/vote-button/vote-button.component';
import { CreateSubredditComponent } from './subreddit/create-subreddit/create-subreddit.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ListSubredditsComponent } from './subreddit/list-subreddits/list-subreddits.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { ViewSubredditComponent } from './subreddit/view-subreddit/view-subreddit.component';
import { ProductSideBarComponent } from './shared/product-side-bar/product-side-bar.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { PolicySideBarComponent } from './shared/policy-side-bar/policy-side-bar.component';
import { ViewPolicyComponent } from './policy/view-policy/view-policy.component';
import { SearchPolicyComponent } from './policy/search-policy/search-policy.component';
import { ViewSearchPoliciesComponent } from './policy/view-search-policies/view-search-policies.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { CreatePolicyComponent } from './policy/create-policy/create-policy.component';
import { ListPolicyComponent } from './policy/list-policy/list-policy.component';
import { PolicyDataDetailsComponent } from './policy/policy-data-details/policy-data-details.component';
import { CreateBlogPostComponent } from './blog-post/create-blog-post/create-blog-post.component';
import { ViewBlogPostComponent } from './blog-post/view-blog-post/view-blog-post.component';
import { HttpClientInterceptor } from './http-client-interceptor';
import { BlogPostTileComponent } from './shared/blog-post-tile/blog-post-tile.component';
import { ServerComponent } from './AngularTheCompleteGuide/server/server.component';
import { ServersComponent } from './AngularTheCompleteGuide/servers/servers.component';
import { WarningAlertComponent } from './AngularTheCompleteGuide/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './AngularTheCompleteGuide/success-alert/success-alert.component';
import { CmpDatabindingComponent } from './AngularTheCompleteGuide/cmp-databinding/cmp-databinding/cmp-databinding.component';
import { CockpitComponent } from './AngularTheCompleteGuide/cmp-databinding/cockpit/cockpit.component';
import { ServerElementComponent } from './AngularTheCompleteGuide/cmp-databinding/server-element/server-element.component';
import { GameControlComponent } from './AngularTheCompleteGuide/assignment-solution-sekcja5-Databinding/game-control/game-control.component';
import { OddComponent } from './AngularTheCompleteGuide/assignment-solution-sekcja5-Databinding/odd/odd.component';
import { EvenComponent } from './AngularTheCompleteGuide/assignment-solution-sekcja5-Databinding/even/even.component';
import { BasicHighlightDirective } from './AngularTheCompleteGuide/assignment-directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './AngularTheCompleteGuide/assignment-directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './AngularTheCompleteGuide/assignment-directives/unless/unless.directive';
import { AccountComponent } from './AngularTheCompleteGuide/assignment-services/account/account.component';
import { NewAccountComponent } from './AngularTheCompleteGuide/assignment-services/new-account/new-account.component';
import { AccountsService } from './AngularTheCompleteGuide/assignment-services/accounts.service';
import { LoggingService} from './AngularTheCompleteGuide/assignment-services/logging.service';
import { ActiveUsersComponent } from './AngularTheCompleteGuide/assignment-solution-sekcja9-services/active-users/active-users.component';
import { InactiveUsersComponent } from './AngularTheCompleteGuide/assignment-solution-sekcja9-services/inactive-users/inactive-users.component';
import { CounterService } from './AngularTheCompleteGuide/assignment-solution-sekcja9-services/counter.service';
import { HomeRoutingComponent } from './AngularTheCompleteGuide/assignment-routing/home-routing/home-routing.component';
import { ServersRoutingComponent } from './AngularTheCompleteGuide/assignment-routing/servers-routing/servers-routing.component';
import { EditServerRoutingComponent } from './AngularTheCompleteGuide/assignment-routing/servers-routing/edit-server-routing/edit-server-routing.component';
import { ServerRoutingComponent } from './AngularTheCompleteGuide/assignment-routing/servers-routing/server-routing/server-routing.component';
import { UsersRoutingComponent } from './AngularTheCompleteGuide/assignment-routing/users-routing/users-routing.component';
import { UserRoutingComponent } from './AngularTheCompleteGuide/assignment-routing/users-routing/user-routing/user-routing.component';
import { PageNotFoundComponent } from './AngularTheCompleteGuide/assignment-routing/page-not-found/page-not-found.component';
import { AuthRoutingService} from './AngularTheCompleteGuide/assignment-routing/auth-routing.service';
import { AuthRoutingGuardService } from './AngularTheCompleteGuide/assignment-routing/auth-routing-guard.service';
import { CanDeactivateRoutingGuardService } from './AngularTheCompleteGuide/assignment-routing/servers-routing/edit-server-routing/can-deactivate-routing-guard.service';
import { ErrorPageComponent } from './AngularTheCompleteGuide/assignment-routing/error-page/error-page.component';
import { ServerRoutingResolverService } from './AngularTheCompleteGuide/assignment-routing/servers-routing/server-routing/server-routing-resolver.service';
import { ObservablesUserService } from './AngularTheCompleteGuide/assignment-observables/observables-user.service';
import { ShortenPipe } from './AngularTheCompleteGuide/assignment-solution-sekcja17-pipes/shorten.pipe';
import { FilterPipe } from './AngularTheCompleteGuide/assignment-solution-sekcja17-pipes/filter.pipe';
import { ReversePipe } from './AngularTheCompleteGuide/assignment-solution-sekcja17-pipes/reverse.pipe';
import { SortPipe } from './AngularTheCompleteGuide/assignment-solution-sekcja17-pipes/sort.pipe';
import { AssignmentSolutionComponent } from './AngularTheCompleteGuide/assignment-solution/assignment-solution.component';
import { AssignmentSolution2Component } from './AngularTheCompleteGuide/assignment-solution2/assignment-solution2.component';
import { AssignmentDirectivesComponent } from './AngularTheCompleteGuide/assignment-directives/assignment-directives.component';
import { AssignmentRoutingComponent } from './AngularTheCompleteGuide/assignment-routing/assignment-routing.component';
import { AssignmentServicesComponent } from './AngularTheCompleteGuide/assignment-services/assignment-services.component';
import { AssignmentObservablesComponent } from './AngularTheCompleteGuide/assignment-observables/assignment-observables.component';
import { AssignmentObservablesUserComponent } from './AngularTheCompleteGuide/assignment-observables/assignment-observables-user/assignment-observables-user.component';
import { AssignmentObservablesHomeComponent } from './AngularTheCompleteGuide/assignment-observables/assignment-observables-home/assignment-observables-home.component';
import { AssignmentFormsComponent } from './AngularTheCompleteGuide/assignment-forms/assignment-forms.component';
import { AssignmentSolutionSekcja15TdFormsComponent } from './AngularTheCompleteGuide/assignment-solution-sekcja15-td-forms/assignment-solution-sekcja15-td-forms.component';
import { AssignmentSolutionSekcja15ReactiveFormsComponent } from './AngularTheCompleteGuide/assignment-solution-sekcja15-reactive-forms/assignment-solution-sekcja15-reactive-forms.component';
import { AssignmentSolutionSekcja152ReactiveFormsComponent } from './AngularTheCompleteGuide/assignment-solution-sekcja15-2-reactive-forms/assignment-solution-sekcja15-2-reactive-forms.component';
import { AssignmentSolutionSekcja17PipesComponent } from './AngularTheCompleteGuide/assignment-solution-sekcja17-pipes/assignment-solution-sekcja17-pipes.component';
import { AssignmentSolutionSekcja9ServicesComponent } from './AngularTheCompleteGuide/assignment-solution-sekcja9-services/assignment-solution-sekcja9-services.component';
import { AssignmentSolutionSekcja18HttpComponent } from './AngularTheCompleteGuide/assignment-solution-sekcja18-http/assignment-solution-sekcja18-http.component';
// tslint:disable-next-line:max-line-length
import { Ng4AuthInterceptorService } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-auth/ng4-auth-interceptor.service';
import { AuthInterceptorService } from './AngularTheCompleteGuide/assignment-solution-sekcja18-http/auth-interceptor.service';
import { LoggingInterceptorService } from './AngularTheCompleteGuide/assignment-solution-sekcja18-http/logging-interceptor.service';
// import firebase modules
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import {environment} from './environments_old/environment';

import { Ng4RecipesComponent } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipes.component';
import { Ng4RecipeListComponent } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe-list/ng4-recipe-list.component';
import { Ng4RecipeDetailComponent } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe-detail/ng4-recipe-detail.component';
import { Ng4RecipeItemComponent } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe-list/ng4-recipe-item/ng4-recipe-item.component';
import { Ng4RecipeStartComponent } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe-start/ng4-recipe-start.component';
import { Ng4RecipeEditComponent } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe-edit/ng4-recipe-edit.component';
import { Ng4ShoppingListComponent } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-shopping-list/ng4-shopping-list.component';
import { Ng4ShoppingEditComponent } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-shopping-list/ng4-shopping-edit/ng4-shopping-edit.component';
import { DropdownDirective } from './AngularTheCompleteGuide/ng4-complete-guide/shared/dropdown.directive';
import { Ng4AlertComponent } from './AngularTheCompleteGuide/ng4-complete-guide/shared/ng4-alert/ng4-alert.component';
import { Ng4PlaceholderDirective } from './AngularTheCompleteGuide/ng4-complete-guide/shared/ng4-placeholder/ng4-placeholder.directive';
import { Ng4RecipeService } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe.service';
import { Ng4ShoppingListService } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-shopping-list/ng4-shopping-list.service';
import { Ng4AuthComponent } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-auth/ng4-auth.component';
import { Ng4RecipesModule } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipes.module';
import { Ng4ShoppingListModule } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-shopping-list/ng4-shopping-list.module';
import { Ng4AuthModule } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-auth/ng4-auth.module';

import { Ng4LoggingService } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-logging.service';
import { Ng4HeaderComponent } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-header/ng4-header.component';
import { Ng4SharedModule } from './AngularTheCompleteGuide/ng4-complete-guide/shared/ng4-shared.module';
import { Ng4CoreModule } from './AngularTheCompleteGuide/ng4-complete-guide/ng4-core.module';
import { ParentComponent } from './AngularTutorials/1_PassDataParentToChild/parent/parent.component';
import { ChildComponent } from './AngularTutorials/1_PassDataParentToChild/child/child.component';
import { TestComponent } from './AngularTutorials/2_EventBinding/test/test.component';
import { TemplateReferenceVariablesComponent } from './AngularTutorials/3_TemplateReferenceVariables/template-reference-variables/template-reference-variables.component';
import { TwoWayBindingComponent } from './AngularTutorials/4_TwoWayBinding/two-way-binding/two-way-binding.component';
import { StructuralDerectivesComponent } from './AngularTutorials/5_StructuralDirectives/structural-derectives/structural-derectives.component';
import { Child2Component } from './AngularTutorials/6_PassingDataFromOneComponentToAnother/ParentToChild/child2/child2.component';
import { Parent2Component } from './AngularTutorials/6_PassingDataFromOneComponentToAnother/ParentToChild/parent2/parent2.component';
import { Child3Component } from './AngularTutorials/6_PassingDataFromOneComponentToAnother/ChildToParent/child3/child3.component';
import { Parent3Component } from './AngularTutorials/6_PassingDataFromOneComponentToAnother/ChildToParent/parent3/parent3.component';
import { Child4Component } from './AngularTutorials/6_PassingDataFromOneComponentToAnother/AnyToAny_UsungServices/child4/child4.component';
import { Child5Component } from './AngularTutorials/6_PassingDataFromOneComponentToAnother/AnyToAny_UsungServices/child5/child5.component';
import { Parent4Component } from './AngularTutorials/6_PassingDataFromOneComponentToAnother/AnyToAny_UsungServices/parent4/parent4.component';
import { Child6Component } from './AngularTutorials/7_PassCheckboxValueOntoComponents/child6/child6.component';
import { Parent6Component } from './AngularTutorials/7_PassCheckboxValueOntoComponents/parent6/parent6.component';
import { Test1Component } from './AngularTutorials/7_PassCheckboxValueOntoComponents/test1/test1.component';
import { Test8Component } from './AngularTutorials/8_HandleCheckBox/test8/test8.component';
import { Parent7Component } from './AngularTutorials/AngularTutorialForBeginers_Codevolution/Part15_ComponentInteraction/parent7/parent7.component';
import { Child7Component } from './AngularTutorials/AngularTutorialForBeginers_Codevolution/Part15_ComponentInteraction/child7/child7.component';

import { CarComponent } from './Exercises/1/car/car.component';
import { CarEditComponent } from './Exercises/1/car-edit/car-edit.component';
import { GarageHeaderComponent } from './Exercises/1/garage-header/garage-header.component';
import { InputDataComponent } from './AngularTutorials/input-data/input-data.component';
import { InputDataWe2Component } from './AngularTutorials/input-data-we2/input-data-we2.component';


//NoteIt application
import { NoteItNgAppComponent } from './NoteItNgApp/note-it-ng-app/note-it-ng-app.component';
import { NavigationComponent } from './NoteItNgApp/note-it-ng-app/navigation/navigation.component';
import { FeedbackComponent } from './NoteItNgApp/note-it-ng-app/feedback/feedback.component';
import { NotesComponent } from './NoteItNgApp/note-it-ng-app/notes/notes.component';
import { NotFoundComponent } from './NoteItNgApp/note-it-ng-app/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    PostTileComponent,
    SideBarComponent,
    SubredditSideBarComponent,
    VoteButtonComponent,
    CreateSubredditComponent,
    CreatePostComponent,
    ListSubredditsComponent,
    ViewPostComponent,
    UserProfileComponent,
    ViewSubredditComponent,
    ProductSideBarComponent,
    ViewProductComponent,
    PolicySideBarComponent,
    ViewPolicyComponent,
    SearchPolicyComponent,
    ViewSearchPoliciesComponent,
    CreateProductComponent,
    ListProductComponent,
    CreatePolicyComponent,
    ListPolicyComponent,
    PolicyDataDetailsComponent,
    CreateBlogPostComponent,
    ViewBlogPostComponent,
    BlogPostTileComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    CmpDatabindingComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    AssignmentRoutingComponent,
    HomeRoutingComponent,
    EditServerRoutingComponent,
    ServersRoutingComponent,
    ServerRoutingComponent,
    UsersRoutingComponent,
    UserRoutingComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    AssignmentSolutionComponent,
    AssignmentSolution2Component,
    AssignmentDirectivesComponent,
    AssignmentServicesComponent,
    AssignmentSolutionSekcja9ServicesComponent,
    AssignmentObservablesComponent,
    AssignmentObservablesUserComponent,
    AssignmentObservablesHomeComponent,
    AssignmentFormsComponent,
    AssignmentSolutionSekcja15TdFormsComponent,
    AssignmentSolutionSekcja15ReactiveFormsComponent,
    AssignmentSolutionSekcja152ReactiveFormsComponent,
    AssignmentSolutionSekcja17PipesComponent,
    AssignmentSolutionSekcja18HttpComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe,

    // Ng4RecipesComponent,
    // Ng4RecipeListComponent,
    // Ng4RecipeDetailComponent,
    // Ng4RecipeItemComponent,
    // Ng4RecipeStartComponent,
    // Ng4RecipeEditComponent,

    // Ng4ShoppingListComponent,
    // Ng4ShoppingEditComponent,

    // DropdownDirective,
    // Ng4LoadingSpinnerComponent,
    // Ng4PlaceholderDirective
    // Ng4AlertComponent

    Ng4HeaderComponent,

    ParentComponent,
    ChildComponent,
    TestComponent,
    TemplateReferenceVariablesComponent,
    TwoWayBindingComponent,
    StructuralDerectivesComponent,
    Child2Component,
    Parent2Component,
    Child3Component,
    Parent3Component,
    Child4Component,
    Child5Component,
    Parent4Component,
    Child6Component,
    Parent6Component,
    Test1Component,
    Test8Component,
    Parent7Component,
    Child7Component,

    // CarComponent,
    // CarEditComponent,

    // GarageComponent,
    // GarageListComponent,
    // GarageStartComponent,
    // GarageEditComponent,
    // GarageHeaderComponent,
    // GarageItemComponent,
    // GarageDetailComponent,
    GarageHeaderComponent,

    InputDataComponent,

    InputDataWe2Component,

    NoteItNgAppComponent,

    NavigationComponent,

    FeedbackComponent,

    NotesComponent,

    NotFoundComponent

    // Ng4AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    EditorModule,
    NgbModule,
    // Ng4RecipesModule,
    // Ng4ShoppingListModule,
    // Ng4AuthModule
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFireModule,
    // AngularFirestoreModule
    Ng4SharedModule,
    Ng4CoreModule
  ],
  providers: [
              {provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true},
              AccountsService,
              LoggingService,
              CounterService,
              AuthRoutingService,
              AuthRoutingGuardService,
              CanDeactivateRoutingGuardService,
              ServerRoutingResolverService,
              ObservablesUserService

              // Ng4LoggingService
              // Ng4ShoppingListService,
              // Ng4RecipeService,
              // {provide: HTTP_INTERCEPTORS, useClass: Ng4AuthInterceptorService, multi: true}
           // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},  // komentuję ze względu na problem z CORS
           // {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
