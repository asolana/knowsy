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

  // guardarUsuario() {
  //   console.log('Nuevo:', this.nuevoUsuario);
  // //   this._tarServ.addTareaToAPI(this.nuevoUsuario).subscribe(unUsuario=>{
  // //     console.log('Respuesta post:',unUsuario);
  // //     //redirigir a lista de tareas
  // //     this._router.navigate(['/tareas']);
  // //   });
  // // }


}

