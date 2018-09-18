import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    NotificacionesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
