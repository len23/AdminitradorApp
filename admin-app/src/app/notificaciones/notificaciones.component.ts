import { Component, OnInit } from '@angular/core';
import { CLIENTES } from '../lista-clientes';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  clientes = CLIENTES;

  constructor() { }

  ngOnInit() {
  }

  

}
