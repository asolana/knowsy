import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { PieComponent } from './pie/pie.component';
import { ListadoTrabajosComponent } from './listado-trabajos/listado-trabajos.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { BuscadorComponent } from './buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    TrabajosComponent,
    PieComponent,
    ListadoTrabajosComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
