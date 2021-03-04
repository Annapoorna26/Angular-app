import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from 'src/app/services/auth-service/auth.service';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes  = [
    {path: '/', component:HomepageComponent, canActivate: [AuthService]},
    {path: '**', component:HomepageComponent, canActivate: [AuthService]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] 
})

export class homeRoutingModule { } 