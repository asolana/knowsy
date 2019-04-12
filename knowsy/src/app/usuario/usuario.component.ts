import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuario = new Usuario(1,"admin ","soy un administrador","assets/img/usuario/admin.jpg",true,23000);

  constructor() { }

  ngOnInit() {
  }

}
