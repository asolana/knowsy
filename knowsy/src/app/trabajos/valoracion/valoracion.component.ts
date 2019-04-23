import { Component, OnInit } from '@angular/core';
import { TrabajosService } from 'src/app/servicio/trabajos.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Trabajo } from 'src/app/modelo/trabajo';

@Component({
  selector: 'valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.scss']
})
export class ValoracionComponent implements OnInit {

  trabajo: Trabajo;
  puntuacion = 0;
   
  constructor(
    private _trabServ:TrabajosService,
    private _route:ActivatedRoute,
    private _router:Router) { }

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
    //Funcionalidad futura
    console.log(`Reportando a: ${this.trabajo._id}`)
  }

  valorar(valoracion){
    this.puntuacion = valoracion;
  }

  aceptarValoracion(){
    try{
      //Enviar actualizacion de datos
      this._trabServ.setValoracion(this.trabajo._id, this.puntuacion)
      console.log(`Puntuacion: ${this.trabajo.puntuacion}, Contador: ${this.trabajo.contpuntuacion}`)
      this._router.navigate(['/trabajos'])
    }catch(err){
      console.log(err);
    }
  }
}


