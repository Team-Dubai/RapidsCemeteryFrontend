import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurialsComponent } from './view/burials/burials.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', component: BurialsComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [BurialsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BurialsModule { }
