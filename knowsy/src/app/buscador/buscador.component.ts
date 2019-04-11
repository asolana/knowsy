import { Component, OnInit } from '@angular/core';
import { TrabajosService } from '../servicio/trabajos.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {


  constructor(private _trabajoServ:TrabajosService) { }

  ngOnInit() {}


  
}