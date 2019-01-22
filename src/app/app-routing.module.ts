import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'tour/walking',
    loadChildren: './modules/tour/tour.module#TourModule'
  },
  {
    path: 'tour/information',
    loadChildren: './modules/information/information.module#InformationModule'
  },
  {
    path: 'history/timeline',
    loadChildren: './modules/timeline/timeline.module#TimelineModule'
  },
  {
    path: 'history/plot',
    loadChildren: './modules/plot/plot.module#PlotModule'
  },
  {
    path: 'history/burials',
    loadChildren: './modules/burials/burials.module#BurialsModule'
  },
  {
    path: 'trails',
    loadChildren: './modules/trails/trails.module#TrailsModule'
  },
  {
    path: 'faq',
    loadChildren: './modules/faq/faq.module#FaqModule'
  },
  {
    path: 'about',
    loadChildren: './modules/about/about.module#AboutModule'
  },
  {
    path: 'contact',
    loadChildren: './modules/contact/contact.module#ContactModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
