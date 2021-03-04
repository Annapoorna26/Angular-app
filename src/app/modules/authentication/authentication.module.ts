import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authMaterialModule } from './auth-materials.components';

import { LoginComponent } from './components/login/login.component';
import { AuthenticationRoutingModule } from './authentication.routing';

import { DefaultAuthPageComponent } from './default-auth-page/default-auth-page.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [LoginComponent, DefaultAuthPageComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    authMaterialModule
  ]
})
export class AuthenticationModule { }
