import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { UsuarioService } from '../servicio/usuario.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss']
})
export class NuevoUsuarioComponent implements OnInit {

  nuevoUsuario = new Usuario(0, null,null,null,null,null,null,0,null);

  constructor(private _usuarioServ: UsuarioService) { }

  ngOnInit() {
  }

  guardarUsuario() {
      this._usuarioServ.guardarUsuario(this.nuevoUsuario);
  }


}

