import { Component, OnInit } from '@angular/core';
import { Trabajo } from '../modelo/trabajo';
import { TrabajosService } from '../servicio/trabajos.service';

@Component({
  selector: 'listado-trabajos',
  templateUrl: './listado-trabajos.component.html',
  styleUrls: ['./listado-trabajos.component.scss']
})
export class ListadoTrabajosComponent implements OnInit {

  trabajos = [];

  constructor(private _traServ: TrabajosService) { }

  ngOnInit() {
    // this.trabajos = this._traServ.getTrabajos();
    // console.log(this.trabajos);

    this._traServ.getTrabajosFromAPI("").subscribe((datos) => {
      //console.log('datos:', listaTareas);
      this.trabajos = datos;
    });
  }

}
