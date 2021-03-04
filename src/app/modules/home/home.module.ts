import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeMaterialModule } from './home-materials.components';
import { homeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    homeRoutingModule,
    homeMaterialModule
  ],

})
export class HomeModule { }
