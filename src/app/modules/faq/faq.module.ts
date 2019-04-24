import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './view/faq/faq.component';
import { Routes, RouterModule } from '@angular/router';
import { QAComponent } from './components/q-a/q-a.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { 
    path: '', component: FaqComponent, pathMatch: 'full', data: {title: 'FAQ'}
  }
];

@NgModule({
  declarations: [FaqComponent, QAComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgbAccordionModule
  ]
})
export class FaqModule { }
