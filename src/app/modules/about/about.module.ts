import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './view/about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module'
import { ParagraphComponent } from './components/paragraph/paragraph.component';

const routes: Routes = [
  { 
    path: '', component: AboutComponent, pathMatch: 'full', data: {title: 'About Us'}
  }
];

@NgModule({
  declarations: [AboutComponent, ParagraphComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AboutModule { }
