import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { Trabajo } from '../modelo/trabajo';
import { tap, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TrabajosService {
  //Array para la lista de trabajos
  private _trabajos: Trabajo[] = null;
  //Observable de la lista de trabajos
  private _trabajosObs: Observable<Trabajo[]>;
  private $tareasSub = new BehaviorSubject(this._trabajos);

  //Constructor con el cliente para peticiones get
  constructor(private _http: HttpClient) { }

  getTrabajosFromAPI(): Observable<Trabajo[]> {

    this._trabajosObs = this.$tareasSub.asObservable();
    this._http.get<Trabajo[]>('http://www.mocky.io/v2/5cb03d4a3100005500e132a5').subscribe(
      data => {
        this._trabajos = data;
        this.$tareasSub.next(this._trabajos);
      },
      error => {
        console.log("Error:", error);
        return throwError(error);
      }
    );

    return this._trabajosObs;

  }

  buscarTrabajos(busqueda: string):void {
    this._http.get<Trabajo[]>('http://www.mocky.io/v2/5cb0919e3100006c00e13542').subscribe(
      data => {
        this._trabajos = data.filter( unT=> unT.nombre.toLowerCase().indexOf(busqueda.toLowerCase())>=0 );
        this.$tareasSub.next(this._trabajos);
      },
      error => {
        console.log("Error:", error);
        return throwError(error);
      }
    );
  }

  //Funcion que devuelve un array de trabajos
  getTrabajos(): Trabajo[] { return this._trabajos; }

  //Funcion que a la cual se le pasa un id y devuelve el trabajo con ese id
  getTrabajoById(id): Observable<Trabajo> {
    return this._http.get<Trabajo>('http://www.mocky.io/v2/5cb091db3100003e37e13544');
  }

  //Funcion que recoje la valoracion de un trabajo y actualiza
  setValoracion(id,valoracion){
    var trab : Trabajo;
    this._http.get<Trabajo>('http://www.mocky.io/v2/5cb091db3100003e37e13544').subscribe(trabajo => {
      trab = trabajo;
      trab.contpuntuacion ++;
      trab.contpuntuacion == 0 ? trab.puntuacion = valoracion : trab.puntuacion += valoracion;
    });
    this._http.post<Trabajo>('http://www.mocky.io/v2/5cb091db3100003e37e13544',trab);
  }

  getValoracion(id):Number{
    let valoracion = 0;
    this._http.get<Trabajo>('http://www.mocky.io/v2/5cb091db3100003e37e13544').subscribe(trabajo => {
      valoracion = trabajo.puntuacion/trabajo.contpuntuacion;
    });
    return valoracion;  
  }

}
