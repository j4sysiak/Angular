import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './shared/auth.service';
// import { StoreModule } from '@ngrx/store';
// import * as fromAuth from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let isAuthenticated = this.authService.isAuthenticated();
    if(isAuthenticated){
      return true;
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
