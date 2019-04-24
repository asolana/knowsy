import { Component, OnInit } from '@angular/core';
import { Trabajo } from '../modelo/trabajo';
import { TrabajosService } from '../servicio/trabajos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'listado-trabajos',
  templateUrl: './listado-trabajos.component.html',
  styleUrls: ['./listado-trabajos.component.scss']
})
export class ListadoTrabajosComponent implements OnInit {

  trabajos = []; 
  cid;

  constructor(
    private _route: ActivatedRoute,
    private _traServ: TrabajosService) { }

  ngOnInit() {
    // this.trabajos = this._traServ.getTrabajos();
    // console.log(this.trabajos);

    this._traServ.getTrabajosFromAPI().subscribe((datos) => {
      this.trabajos = datos;
    });

    this._route.params.subscribe(parametros => {
      console.log("Parametros", parametros);
      if(parametros['cid']){
        this.cid = parametros['cid'];
        this._traServ.filtroCategorias(this.cid);
      }
    });

    
  }

}
