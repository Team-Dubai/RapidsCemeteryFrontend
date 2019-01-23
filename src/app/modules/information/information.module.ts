import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './view/information/information.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', component: InformationComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [InformationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InformationModule { }
