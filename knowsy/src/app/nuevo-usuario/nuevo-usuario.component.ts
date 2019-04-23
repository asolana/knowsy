import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss']
})
export class NuevoUsuarioComponent implements OnInit {

  nuevoUsuario = new Usuario(0, null,null,null,null,null,null,0,null);

  constructor() { }

  ngOnInit() {
  }

  guardarUsuario() {
    // this._trabajoServ.buscarTrabajos(this.nuevoUsuario);
    }


}

