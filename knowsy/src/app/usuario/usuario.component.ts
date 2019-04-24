import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../servicio/usuario.service';
import { Trabajo } from '../modelo/Trabajo';
import { TrabajosService } from '../servicio/trabajos.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  // usuario = new Usuario(1,"pepito ","e@e.com",null,'hola',"assets/img/usuario/admin.jpg",true,23000,false);
  usuario: Usuario;
  uid;

  // Trabajos de un usuario
  trabajos: Trabajo[];
  constructor( 
    private _route: ActivatedRoute,
    private _servUser: UsuarioService,
    private _servTrabs: TrabajosService
    ) {}

  ngOnInit() {
    // suscribirse a los parámetros
    this._route.params.subscribe(parametros => {
      this.uid = parametros['id'];
      // suscribirse al usuario
      this._servUser.getUsuarioById(this.uid).subscribe(unUsuario => {
        this.usuario = unUsuario;
        console.log('Usuariooooo: '+this.usuario);
      });
      
    });

    // Suscribirse a los trabajos
    
    this._servTrabs.getTrabajosFromAPI().subscribe((datos) => {
      console.log('datos:', datos);
      this.trabajos = datos;
    });
    this._servTrabs.buscarTrabajosUsuario(this.uid);
  }

  eliminar(id){
    
    this._servTrabs.deleteTrabajo(id).subscribe(datos =>{
      console.log("eliminando:", datos);
      this._servTrabs.getTrabajosFromAPI().subscribe((datos) => {
        console.log('datos:', datos);
        this.trabajos = datos;
      });
      this._servTrabs.buscarTrabajosUsuario(this.uid);
      
    });
  }

}
