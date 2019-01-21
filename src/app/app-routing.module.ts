import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'tour',
    loadChildren: './modules/tour/tour.module#TourModule'
  },
  {
    path: 'history',
    loadChildren: './modules/history/history.module#HistoryModule'
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
