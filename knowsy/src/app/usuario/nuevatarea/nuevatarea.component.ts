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
  nuevoTrabajo= new Trabajo(0,"","",0,0, "",0,"",0);

  constructor(private _tarServ:TrabajosService, private _route: ActivatedRoute, private _router: Router)  { }
  ngOnInit() {
    this._route.params.subscribe(parametros => {
      this.nuevoTrabajo.idusuario = parametros['id'];});
  } 
  
   guardarDatos(){
    this._tarServ.guardarTrabajo(this.nuevoTrabajo).subscribe(data=>{
      this._router.navigate(['/trabajos']);
    });
  }
}
