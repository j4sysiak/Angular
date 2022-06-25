import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {GarageRoutingModule} from './garage-routing.module';
import {GarageListComponent} from '../garage-list/garage-list.component';
import {GarageStartComponent} from '../garage-start/garage-start.component';
import {GarageEditComponent} from '../garage-edit/garage-edit.component';
import {GarageComponent} from '../garage/garage.component';
import {GarageItemComponent} from '../garage-item/garage-item.component';
import {GarageDetailComponent} from '../garage-detail/garage-detail.component';

@NgModule({
  declarations: [
    GarageComponent,
    GarageListComponent,
    GarageStartComponent,
    GarageEditComponent,
    GarageItemComponent,
    GarageDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    GarageRoutingModule
  ],
  exports: [
    CommonModule
  ]
})
export class GarageModule { }
