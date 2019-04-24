import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { UsuarioService } from '../servicio/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss']
})
export class NuevoUsuarioComponent implements OnInit {

  nuevoUsuario = new Usuario(0,"","","","","",null,0,null);
  isregistrado: boolean = false;

  constructor(private _usuarioServ: UsuarioService, private _router: Router) { }

  ngOnInit() {
  }

  guardarUsuario() {
    console.log("funciona!")
    this._usuarioServ.guardarUsuario(this.nuevoUsuario).subscribe(data=>{});
  }
  volver(){
    this._router.navigate(['/trabajos']);
  }


}

