import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourComponent } from './view/tour/tour.component';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { SharedModule } from '../../shared/shared.module';
import { WizardComponent } from './components/wizard/wizard.component';
import { WizardStepComponent } from './components/wizard-step/wizard-step.component';

const routes: Routes = [
  { 
    path: '', component: TourComponent, pathMatch: 'full', data: {title: 'Walking Tour'}
  }
];

@NgModule({
  declarations: [TourComponent, MapComponent, WizardComponent, WizardStepComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class TourModule { }
