import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './view/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { SpotlightComponent } from './components/spotlight/spotlight.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [HomeComponent, BannerComponent, SpotlightComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
