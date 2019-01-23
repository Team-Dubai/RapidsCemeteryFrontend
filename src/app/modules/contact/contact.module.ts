import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './view/contact/contact.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', component: ContactComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
