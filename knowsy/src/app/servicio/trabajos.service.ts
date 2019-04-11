import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Trabajo } from '../modelo/trabajo';
import { tap,catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TrabajosService {

  //Array para la lista de trabajos
  private _trabajos: Trabajo[] = null;

  //Constructor con el cliente para peticiones get
  constructor(private _http:HttpClient) { }

  //Peticion de datos al servidor
  getTrabajosFromAPI(): Observable<Trabajo[]> {
    return this._http.get<Trabajo[]>('http://www.mocky.io/v2/5caf02663400009324ab6fa6').pipe(
      tap(trab => {
          this._trabajos = trab;
        }),catchError(error => {
          console.log("Error: ",error);
          return throwError(error);
        })
      );
  }

  //Funcion que devuelve un array de trabajos
  getTrabajos(): Trabajo[] { return this._trabajos; }

  //Funcion que a la cual se le pasa un id y devuelve el trabajo con ese id
  getTrabajosById(id): Trabajo {
    return this._trabajos.find(function(trabajo){
      return trabajo.id == id;
    });
  }


}