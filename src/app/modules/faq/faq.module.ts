import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './view/faq/faq.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', component: FaqComponent, pathMatch: 'full', data: {title: 'Frequently Asked Questions'}
  }
];

@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FaqModule { }
