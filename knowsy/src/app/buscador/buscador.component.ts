import { Component, OnInit } from '@angular/core';
import { TrabajosService } from '../servicio/trabajos.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  busqueda:string=null;
  

  constructor(private _trabajoServ:TrabajosService) { }

  ngOnInit() {}
  buscar() {

    this._trabajoServ.buscarTrabajos(this.busqueda);
    
    // console.log("buscando", this.busqueda);
  }
  
}