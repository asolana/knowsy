import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../servicio/categorias.service';

@Component({
  selector: 'categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  categorias= []
  constructor(private _catServ: CategoriasService) { }

  ngOnInit() {
  //   this.categorias= this._traServ.getCategorias();
 
  this._catServ.getCategoriasFromAPI().subscribe((datos) =>{
    this.categorias= datos;
   console.log(this.categorias);

  });
}

}
