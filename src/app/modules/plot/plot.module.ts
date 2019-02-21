import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotComponent } from './view/plot/plot.component';
import { Routes, RouterModule } from '@angular/router';
import { LoomisComponent } from './components/loomis/loomis.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { 
    path: '', component: PlotComponent, pathMatch: 'full', data: {title: 'Loomis Cemetery Plot Map'}
  }
];

@NgModule({
  declarations: [PlotComponent, LoomisComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PlotModule { }
