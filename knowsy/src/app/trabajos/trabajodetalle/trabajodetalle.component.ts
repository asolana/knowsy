import { Component, OnInit } from '@angular/core';

import { TrabajosService } from 'src/app/servicio/trabajos.service';

@Component({
  selector: 'trabajodetalle',
  templateUrl: './trabajodetalle.component.html',
  styleUrls: ['./trabajodetalle.component.scss']
})
export class TrabajodetalleComponent implements OnInit {
  public trabajo= null;
  
  constructor(private _trabajoServ:TrabajosService) { }

  ngOnInit() {
  }

}
