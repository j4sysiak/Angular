import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {DataStorageService} from '../shared/data-storage.service';
import {Ng4AuthService} from '../ng4-auth/ng4-auth.service';
import {Ng4LoggingService} from '../ng4-logging.service';

@Component({
  selector: 'app-ng4-header',
  templateUrl: './ng4-header.component.html',
  styleUrls: ['./ng4-header.component.css']
})
export class Ng4HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: Ng4AuthService,
    private loggingService: Ng4LoggingService) {
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
      console.log(!user);
      console.log(!!user);
    });
    this.loggingService.printLog('Hello from Ng4HeaderComponent ngOnInit');
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}





























