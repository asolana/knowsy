import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { Categoria } from '../modelo/categoria';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private _categorias: Categoria[] = null;
  private _categoriasObs: Observable<Categoria[]>;
  private $categoriasSub = new BehaviorSubject(this._categorias);

  constructor(private _http: HttpClient) { }

  getCategoriasFromAPI(): Observable<Categoria[]> {
    this._categoriasObs = this.$categoriasSub.asObservable();
    this._http.get<Categoria[]>(`${environment.API_URL}/categorias`).subscribe(
      data => {
        this._categorias = data;
        this.$categoriasSub.next(this._categorias);
      },
      error => {
        console.log("Error:", error);
        return throwError(error);
      }
    );

    return this._categoriasObs;

  }

  buscarCategorias(busqueda: string):void {
    this._http.get<Categoria[]>(`${environment.API_URL}/categorias`).subscribe(
      data => {
        this._categorias = data.filter( unT=> unT.nombre.toLowerCase().indexOf(busqueda.toLowerCase())>=0 );
        this.$categoriasSub.next(this._categorias);
      },
      error => {
        console.log("Error:", error);
        return throwError(error);
      }
    );
  }

  //Funcion que devuelve un array de Categorias
  getCategorias(): Categoria[] { return this._categorias; }


}
