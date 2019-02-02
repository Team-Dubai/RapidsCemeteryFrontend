import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './view/information/information.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module'
import { CardComponent } from './components/card/card.component';
import { ItemComponent } from './components/item/item.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { 
    path: '', component: InformationComponent, pathMatch: 'full', data: {title: 'Informational Tour'}
  }
];

@NgModule({
  declarations: [InformationComponent, CardComponent, ItemComponent, SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [ItemComponent]
})
export class InformationModule { }
