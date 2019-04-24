import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, GuardsCheckEnd } from '@angular/router';
import {Router} from '@angular/router';
import { TrabajosService } from 'src/app/servicio/trabajos.service';
import { Trabajo } from 'src/app/modelo/trabajo';


@Component({
  selector: 'nuevatarea',
  templateUrl: './nuevatarea.component.html',
  styleUrls: ['./nuevatarea.component.scss']
})
export class NuevatareaComponent implements OnInit {
  nuevoTrabajo= new Trabajo(0,"","",0,0,"",0,"","");
  isCreado: boolean = false;
  tid: any = null;

  constructor(private _tarServ:TrabajosService, private _route: ActivatedRoute, private _router: Router)  { }
  ngOnInit() {

    this._route.params.subscribe(parametros => {
      this.nuevoTrabajo.idusuario = parametros['id'];
      if(parametros['tid']){
        this.tid = parametros['tid'];
        this._tarServ.getTrabajoById(this.tid).subscribe(datos => {
          this.nuevoTrabajo = datos;
        });
        
      }
    });
      
  } 
  
  guardarDatos(){
    if(this.tid){
      this._tarServ.editTrabajo(this.tid,this.nuevoTrabajo).subscribe(data => {})
    }else{
      this._tarServ.guardarTrabajo(this.nuevoTrabajo).subscribe(data=>{});
    }
    
  }
  volver(){
    this._router.navigate(['/usuario/', this.nuevoTrabajo.idusuario]);
  }
  
}
