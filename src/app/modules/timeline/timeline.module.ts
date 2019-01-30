import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './view/timeline/timeline.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', component: TimelineComponent, pathMatch: 'full', data: {title: 'Cemetery Timeline'}
  }
];

@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TimelineModule { }
