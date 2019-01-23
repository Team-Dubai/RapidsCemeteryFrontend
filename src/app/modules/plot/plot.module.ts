import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotComponent } from './view/plot/plot.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', component: PlotComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [PlotComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlotModule { }
