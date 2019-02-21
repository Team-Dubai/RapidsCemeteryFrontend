import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './view/timeline/timeline.component';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ChronologyComponent } from './components/chronology/chronology.component';
import { EventsComponent } from './components/events/events.component';
import { ChronologyContentDirective, ChronologyTitleDirective } from './directives/layout.directive'

const routes: Routes = [
  { 
    path: '', component: TimelineComponent, pathMatch: 'full', data: {title: 'Cemetery Timeline'}
  }
];

@NgModule({
  declarations: [
    TimelineComponent, 
    ChronologyComponent, 
    EventsComponent, 
    ChronologyContentDirective, 
    ChronologyTitleDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class TimelineModule { }
