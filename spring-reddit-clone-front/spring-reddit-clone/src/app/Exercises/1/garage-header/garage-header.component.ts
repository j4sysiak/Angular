import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../../../AngularTheCompleteGuide/ng4-complete-guide/shared/data-storage.service';
import {Ng4AuthService} from '../../../AngularTheCompleteGuide/ng4-complete-guide/ng4-auth/ng4-auth.service';
import {Ng4LoggingService} from '../../../AngularTheCompleteGuide/ng4-complete-guide/ng4-logging.service';
import {GarageDataStorageService} from '../shared/garage-data-storage.service';

@Component({
  selector: 'app-garage-header',
  templateUrl: './garage-header.component.html',
  styleUrls: ['./garage-header.component.css']
})
export class GarageHeaderComponent implements OnInit {

  constructor(
    private garageDataStorageService: GarageDataStorageService) {
  }

  ngOnInit(): void {
    console.log('Hello from Ng4HeaderComponent ngOnInit');
  }

  onSaveData() {
    this.garageDataStorageService.storeGarages();
  }

  onFetchData() {
    this.garageDataStorageService.fetchGarages().subscribe();
  }
}
