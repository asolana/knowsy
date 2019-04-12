import { Component, OnInit } from '@angular/core';
import { TrabajosService } from 'src/app/servicio/trabajos.service';
import { ActivatedRoute } from '@angular/router';
import { Trabajo } from 'src/app/modelo/trabajo';


@Component({
  selector: 'trabajodetalle',
  templateUrl: './trabajodetalle.component.html',
  styleUrls: ['./trabajodetalle.component.scss']
})
export class TrabajodetalleComponent implements OnInit {
  clickMessage='';
  

  trabajo: Trabajo;

  constructor(
    private _route: ActivatedRoute,
    private _trabajoServ: TrabajosService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe(parametros => {
      console.log('paramentros:', parametros);
      const id = parametros['id'];
      this._trabajoServ.getTrabajoById(id).subscribe(trab => {
        this.trabajo = trab;
      });
      console.log('trabajo:', this.trabajo);
      
    })
  
  
  }
  contratar(){
    this.clickMessage='FELICIDADES!';
    alert(this.clickMessage);
    
  }
 
}
