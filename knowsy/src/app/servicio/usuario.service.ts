import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelo/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _usuarios: Usuario[] = null;

  constructor(private _http: HttpClient) { }

  getUsuariosFromAPI(): Observable<Usuario[]> {
    return this._http.get<Usuario[]>('http://www.mocky.io/v2/5cb0477b3100004b00e132ff');
  }

  getUsuarioById(id): Observable<Usuario> {
    return this._http.get<Usuario>('http://www.mocky.io/v2/5cb07835310000850be13499');
  }


  // addUsuarioToAPI(nuevoUsuario: Usuario): Observable<Usuario> {
  //   return this._http.post<Usuario>('http://www.mocky.io/v2/5cadf6e62f00005f1d3a99e1', nuevoUsuario)
  // }



  // getUsuarioById(id){
  //   this.getUsuariosFromAPI().subscribe((usuarios) => { this._usuarios = usuarios});
  //   return this._usuarios.find(function (unUser) {
  //     return unUser.id == id;
  //  });
  // }
}
