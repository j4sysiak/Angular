import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {Ng4AuthComponent} from './ng4-auth.component';
import {Ng4SharedModule} from '../shared/ng4-shared.module';


@NgModule({
  declarations: [Ng4AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: Ng4AuthComponent }
    ]),
    Ng4SharedModule
  ]
})
export class Ng4AuthModule {}


