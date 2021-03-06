import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './view/information/information.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemComponent } from '../../shared/item/item.component';
import { SearchComponent } from './components/search/search.component';
import { ItemService } from 'src/app/services/item.service';
import { FilterComponent } from './components/filter/filter.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { 
    path: '', component: InformationComponent, pathMatch: 'full', data: {title: 'Areas of Interest'}
  }
];

@NgModule({
  declarations: [InformationComponent, SearchComponent, FilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgbModule,
    NgbAccordionModule
  ],
  entryComponents: [ItemComponent],
  providers: [ItemService]
})
export class InformationModule { }
