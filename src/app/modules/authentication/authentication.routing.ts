import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DefaultAuthPageComponent } from './default-auth-page/default-auth-page.component';


const  routes: Routes = [
    { path: '', component: DefaultAuthPageComponent }
]
@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] 
})

export class AuthenticationRoutingModule { }