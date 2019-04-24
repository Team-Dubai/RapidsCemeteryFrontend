import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailsComponent } from './view/trails/trails.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module'
import { ItemComponent } from '../../shared/item/item.component';
import { ItemService } from 'src/app/services/item.service';

const routes: Routes = [
  { 
    path: '', component: TrailsComponent, pathMatch: 'full', data: {title: 'Nearby Historical Trails'}
  }
];

@NgModule({
  declarations: [TrailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [ItemComponent],
  providers: [ItemService]
})
export class TrailsModule { }
