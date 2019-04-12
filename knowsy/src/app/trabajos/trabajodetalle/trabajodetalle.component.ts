import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trabajodetalle',
  templateUrl: './trabajodetalle.component.html',
  styleUrls: ['./trabajodetalle.component.scss']
})
export class TrabajodetalleComponent implements OnInit {

  constructor(private _http:HttpClient) { }

  ngOnInit() {
  }

}
