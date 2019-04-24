import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, BannerComponent, CardComponent, ItemComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [NavbarComponent, FooterComponent, BannerComponent, CardComponent, ItemComponent]
})
export class SharedModule { }
