import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurialsComponent } from './view/burials/burials.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module'
import { ItemComponent } from '../../shared/item/item.component';
import { ItemService } from 'src/app/services/item.service';

const routes: Routes = [
  { 
    path: '', component: BurialsComponent, pathMatch: 'full', data: {title: 'Complete List of Burials'}
  }
];

@NgModule({
  declarations: [BurialsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [ItemComponent],
  providers: [ItemService]
})
export class BurialsModule { }
