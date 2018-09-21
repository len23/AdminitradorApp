import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './not-found.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'administrador', component: EncabezadoComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent},

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 


}
