import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourComponent } from './view/tour/tour.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', component: TourComponent, pathMatch: 'full', data: {title: 'Cemetery Tour'}
  }
];

@NgModule({
  declarations: [TourComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TourModule { }
