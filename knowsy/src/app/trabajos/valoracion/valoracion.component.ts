import { Component, OnInit } from '@angular/core';
import { TrabajosService } from 'src/app/servicio/trabajos.service';
import { UsuarioService } from 'src/app/servicio/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Trabajo } from 'src/app/modelo/trabajo';

@Component({
  selector: 'valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.scss']
})
export class ValoracionComponent implements OnInit {

  trabajo: Trabajo;
  puntuacion = 1;
   
  constructor(
    private _trabServ:TrabajosService, 
    private _userServ:UsuarioService,
    private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(parametros => {
      console.log('paramentros:', parametros);
      const id = parametros['id'];
      this._trabServ.getTrabajoById(id).subscribe(trab => {
        this.trabajo = trab;
      });
      console.log('trabajo:', this.trabajo);
      
    })
  }


  reportar(){

  }

  valorar(){

  }

}


