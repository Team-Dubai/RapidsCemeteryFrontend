import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './view/contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module'
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { 
    path: '', component: ContactComponent, pathMatch: 'full', data: {title: 'Contact Us'}
  }
];

@NgModule({
  declarations: [ContactComponent, FormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    NgbAlertModule
  ]
})
export class ContactModule { }
