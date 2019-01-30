import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailsComponent } from './view/trails/trails.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', component: TrailsComponent, pathMatch: 'full', data: {title: 'Nearby Historical Trails'}
  }
];

@NgModule({
  declarations: [TrailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TrailsModule { }
