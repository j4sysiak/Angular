import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {GarageComponent} from '../garage/garage.component';
import {GarageStartComponent} from '../garage-start/garage-start.component';
import {GarageEditComponent} from '../garage-edit/garage-edit.component';
import {GarageDetailComponent} from '../garage-detail/garage-detail.component';
import {GarageResolverService} from './garage-resolver.service';

const garageRoutes: Routes = [
  {
    path: '',
    component: GarageComponent,
    children: [
      { path: '', component: GarageStartComponent },
      { path: 'new', component: GarageEditComponent }
      ,
      {
        path: ':id',
        component: GarageDetailComponent,
        resolve: [GarageResolverService]
      }
      ,
      // {
      //   path: ':id/edit',
      //   component: GarageEditComponent,
      //   resolve: [GarageResolverService]
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(garageRoutes)],
  exports: [RouterModule]
})

export class GarageRoutingModule{}
