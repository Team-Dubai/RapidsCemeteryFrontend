import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './view/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module'
import { SpotlightComponent } from './components/spotlight/spotlight.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent, pathMatch: 'full', data: {title: 'Rapids Cemetery'}
  }
];

@NgModule({
  declarations: [HomeComponent, SpotlightComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomeModule { }
