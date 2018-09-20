import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles-edificio',
  templateUrl: './detalles-edificio.component.html',
  styleUrls: ['./detalles-edificio.component.css']
})
export class DetallesEdificioComponent implements OnInit {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;

  constructor() { }
  ngOnInit() {
  }

}
