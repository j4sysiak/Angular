import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {Ng4ShoppingListService} from './ng4-shopping-list/ng4-shopping-list.service';
import {Ng4RecipeService} from './ng4-recipes/ng4-recipe.service';
import {Ng4AuthInterceptorService} from './ng4-auth/ng4-auth-interceptor.service';
import {Ng4LoggingService} from './ng4-logging.service';

@NgModule({
  providers: [
    Ng4ShoppingListService,
    Ng4RecipeService,
    {provide: HTTP_INTERCEPTORS, useClass: Ng4AuthInterceptorService, multi: true}
    // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},  // komentuję ze względu na problem z CORS
    // {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true}
  ]
})
export class Ng4CoreModule {}
