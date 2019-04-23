import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { Trabajo } from '../modelo/trabajo';
import { environment} from '../../environments/environment';



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
    console.log(`${environment.API_URL}/tareas`)
    this._trabajosObs = this.$tareasSub.asObservable();
    this._http.get<Trabajo[]>(`${environment.API_URL}/tareas`).subscribe(
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
    this._http.get<Trabajo[]>(`${environment.API_URL}/tareas`).subscribe(
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
  buscarTrabajosUsuario(idUsuario: string):void {
    this._http.get<Trabajo[]>(`${environment.API_URL}/tareas`).subscribe(
      data => {
        this._trabajos = data.filter( unT=> unT.idusuario.indexOf(idUsuario.toLowerCase())>=0 );
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
    return this._http.get<Trabajo>(`${environment.API_URL}/tareas/${id}`);
  }

  guardarTrabajo(nuevoTrabajo:Trabajo):Observable<Trabajo>{
    return this._http.post<Trabajo>(`${environment.API_URL}/tareas`, nuevoTrabajo);
  }

  //Funcion que recoje la valoracion de un trabajo y actualiza
  setValoracion(id,valoracion){
    var trab : Trabajo;
    this._http.get<Trabajo>(`${environment.API_URL}/tareas/${id}`).subscribe(trabajo => {
      trab = trabajo;
      trab.contpuntuacion ++;
      trab.contpuntuacion == 0 ? trab.puntuacion = valoracion : trab.puntuacion += valoracion;
    });
    this._http.post<Trabajo>(`${environment.API_URL}/tareas/${id}`,trab);
  }

  getValoracion(id):Number{
    let valoracion = 0;
    this._http.get<Trabajo>(`${environment.API_URL}/tareas/${id}`).subscribe(trabajo => {
      valoracion = trabajo.puntuacion/trabajo.contpuntuacion;
    });
    return valoracion;  
  }

  //Funcion para eliminar
  deleteTrabajo(id): Observable<Trabajo>{
    return this._http.delete<Trabajo>(`${environment.API_URL}/tareas/${id}`);
  }

  //Funcion para editar
  editTrabajo(id,trabajo){
    return this._http.put<Trabajo>(`${environment.API_URL}/tareas/${id}`,trabajo);
  }

}
