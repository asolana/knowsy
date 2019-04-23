import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelo/usuario';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _usuarios: Usuario[] = null;

  constructor(private _http: HttpClient) { }

  getUsuariosFromAPI(): Observable<Usuario[]> {
    return this._http.get<Usuario[]>(`${environment.API_URL}/usuarios`);
  }

  getUsuarioById(id): Observable<Usuario> {
    return this._http.get<Usuario>('http://www.mocky.io/v2/5cb07835310000850be13499');
  }

  // getUsuarioById(id){
  //   this.getUsuariosFromAPI().subscribe((usuarios) => { this._usuarios = usuarios});
  //   return this._usuarios.find(function (unUser) {
  //     return unUser.id == id;
  //  });
  // }
}
