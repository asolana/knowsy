import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelo/usuario';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
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
    return this._http.get<Usuario>(`${environment.API_URL}/usuarios/${id}`);
  }

  guardarUsuario(nuevoUsuario:Usuario):Observable<Usuario>{
    return this._http.post<Usuario>(`${environment.API_URL}/usuarios`, nuevoUsuario);
  }
}
