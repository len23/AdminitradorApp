import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './not-found.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import {AuthGuardService} from './auth-guard.service'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'administrador', component: EncabezadoComponent, canActivate: [AuthGuardService]},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent },

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 


}
