import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'listado-trabajos',
  templateUrl: './listado-trabajos.component.html',
  styleUrls: ['./listado-trabajos.component.scss']
})
export class ListadoTrabajosComponent implements OnInit {

  trabajos = [
    {id:1, nombre: "pasear perro", idusuario:1, puntuacion: 4, descripcion: "paseo perros", precio: 450, img:"assets/img/foto01.jpg"},
    {id:2, nombre: "cocinar pato", idusuario:1, puntuacion: 4, descripcion: "delicioso", precio: 420, img:"assets/img/foto02.jpg"},
    {id:3, nombre: "reparar goteras", idusuario:2, puntuacion: 4, descripcion: "no goteará ", precio: 50, img:"assets/img/foto03.jpg"},
    {id:4, nombre: "peluquería", idusuario:1, puntuacion: 4, descripcion: "lorem ipsum", precio: 650, img:"assets/img/foto04.jpg"},
    {id:5, nombre: "bañar caballos", idusuario:1, puntuacion: 4, descripcion: "lorem ipsum", precio: 450, img:"assets/img/foto05.jpg"},
    {id:6, nombre: "programación ", idusuario:1, puntuacion: 4, descripcion: "programación entre comillas, real", precio: 450, img:"assets/img/foto06.jpg"},
    ];

  constructor() { }

  ngOnInit() {
  }

}
