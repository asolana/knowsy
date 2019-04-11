import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { Trabajo } from '../modelo/trabajo';
import { tap,catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TrabajosService {

  //Array para la lista de trabajos
  private _trabajos: Trabajo[] = null;
  //Observable de la lista de trabajos
  private _trabajosObs: Observable<Trabajo[]>;

  //Constructor con el cliente para peticiones get
  constructor(private _http:HttpClient) { }

  //Peticion de datos al servidor
  getTrabajosFromAPIEmpty(){
    if(!this._trabajosObs){
      this._trabajosObs = this._http.get<Trabajo[]>('http://www.mocky.io/v2/5caf02663400009324ab6fa6').pipe(
        tap(trabs => this._trabajos = trabs),
        catchError(error => {
          console.log("Error:", error);
          return throwError(error);
        })
      );
    }
  }
  getTrabajosFromAPI(id): Observable<Trabajo[]> {
    console.log("va:", this._trabajos);

    if(!this._trabajos){
      this.getTrabajosFromAPIEmpty();
      return this._trabajosObs;
    }else{  
      //Aqui me he quedado
      console.log("va3");
      this._trabajosObs = this._http.get<Trabajo[]>('http://www.mocky.io/v2/5caf02663400009324ab6fa6').pipe(
       tap(trabs => {
         //filtro
        //  this._trabajos = trabs
        trabs.find(function(tra){
          
           return tra.nombre == id;
         })
        }),
       catchError(error => {
         console.log("Error:", error);
         return throwError(error);
       })
     );
    }
  //  if (this._trabajos) {
  //    return of(this._trabajos);
  //  } else if (this._trabajosObs) {
  //     this._trabajosObs.subscribe(function(lista){
  //       console.log("trabajos obs", lista);
  //    });
  //    return this._trabajosObs;
  //  } else {
  //    this._trabajosObs = this._http.get<Trabajo[]>('http://www.mocky.io/v2/5caf02663400009324ab6fa6').pipe(
  //      tap(trabs => {
  //        //filtro
  //       //  this._trabajos = trabs
  //       trabs.find(function(tra){
  //          return tra.nombre == id;
  //        })
  //       }),
  //      catchError(error => {
  //        console.log("Error:", error);
  //        return throwError(error);
  //      })
  //    );
  //    return this._trabajosObs;
  //  }
  }
  
  //Funcion que devuelve un array de trabajos
  getTrabajos(): Trabajo[] { return this._trabajos; }

  //Funcion que a la cual se le pasa un id y devuelve el trabajo con ese id
  getTrabajoById(id): Trabajo {
    return this._trabajos.find(function(trabajo){
      return trabajo.id == id;
    });
  }


}
