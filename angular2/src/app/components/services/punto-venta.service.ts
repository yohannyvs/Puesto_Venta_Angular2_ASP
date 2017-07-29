import { Injectable } from '@angular/core';
import { Carrito } from '../../components/interfaces/carrito.interface';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PuntoVentaService
{

  productos:any[] = [];

  constructor( private http:Http ) { }

  getProductos()
  {
    let headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Credentials", "true");
    headers.append("Access-Control-Allow-Headers", "Content-Type");
    headers.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    headers.append("Content-Type", "application/json,application/x-www-form-urlencoded");

    let urlGetProductos:string = "http://localhost:49781/api/Productos/GetProductos";

    return this.http.get( urlGetProductos, { headers } )
                    .map( res => {
                        console.log(res);
                        this.productos = res.json();
                        console.log(this.productos)
                    } )
  }

}
