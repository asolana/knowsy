import { Component, OnInit } from '@angular/core';
import { Trabajo } from '../modelo/trabajo';
import { TrabajosService } from '../servicio/trabajos.service';

@Component({
  selector: 'listado-trabajos',
  templateUrl: './listado-trabajos.component.html',
  styleUrls: ['./listado-trabajos.component.scss']
})
export class ListadoTrabajosComponent implements OnInit {

  trabajos = [
    {id:1, nombre: "pasear perro", idusuario:1, puntuacion: 4, descripcion: "paseo perros", precio: 450, img:"img/src/foto01.jpg"},
    {id:2, nombre: "cocinar pato", idusuario:1, puntuacion: 4, descripcion: "delicioso", precio: 420, img:"img/src/foto02.jpg"},
    {id:3, nombre: "reparar goteras", idusuario:2, puntuacion: 4, descripcion: "no goteará ", precio: 50, img:"img/src/foto03.jpg"},
    {id:4, nombre: "peluquería", idusuario:1, puntuacion: 4, descripcion: "lorem ipsum", precio: 650, img:"img/src/foto04.jpg"},
    {id:5, nombre: "bañar caballos", idusuario:1, puntuacion: 4, descripcion: "lorem ipsum", precio: 450, img:"img/src/foto05.jpg"},
    {id:6, nombre: "programación ", idusuario:1, puntuacion: 4, descripcion: "programación entre comillas, real", precio: 450, img:"img/src/foto06.jpg"},
    ];

  constructor(private _traServ: TrabajosService) { }

  ngOnInit() {
    //trabajos = this._traServ.getTrabajos();

    this._traServ.getTrabajos().subscribe((datos) => {
      //console.log('datos:', listaTareas);
      this.trabajos = datos;
    });
  }

}
