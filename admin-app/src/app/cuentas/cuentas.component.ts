import { Component, OnInit } from '@angular/core';
import {EDIFICIOS} from '../lista-edificios';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  edificios = EDIFICIOS;
  constructor() { }

  ngOnInit() {
  }

}
