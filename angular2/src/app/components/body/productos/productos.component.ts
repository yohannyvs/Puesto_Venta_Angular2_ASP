import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PuntoVentaService } from '../../services/punto-venta.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  constructor( public _puntoventaservice:PuntoVentaService ) { }

  ngOnInit() {
    this._puntoventaservice.getProductos()
        .subscribe();
  }

}
