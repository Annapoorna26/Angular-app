import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialComponents } from './material-components.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common-components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './common-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
