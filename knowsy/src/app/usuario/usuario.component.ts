import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../servicio/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuario = new Usuario(1,"pepito ","e@e.com",null,'hola',"assets/img/usuario/admin.jpg",true,23000,false);

  constructor( 
    private _route: ActivatedRoute,
    private _servUser: UsuarioService
    ) {}

  ngOnInit() {
    // suscribirse a los parámetros
    this._route.params.subscribe(parametros => {
      console.log('parametros:', parametros);
      const uid = parametros['id'];
      // suscribirse al usuario
      this._servUser.getUsuarioById().subscribe((unUsuario) => {
        this.usuario = unUsuario;
        console.log(this.usuario);
      });
    });


    // this._tarServ.getUsuario( ID PASADA POR PARAMETRO).subscribe((unUsuario) => {
    //   //console.log('datos:', listaTareas);
    //   this.tareas = listaTareas;
    // });
  }

}
