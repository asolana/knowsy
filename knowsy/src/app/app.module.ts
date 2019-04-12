import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { PieComponent } from './pie/pie.component';
import { ListadoTrabajosComponent } from './listado-trabajos/listado-trabajos.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { TrabajodetalleComponent } from './trabajos/trabajodetalle/trabajodetalle.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ValoracionComponent } from './trabajos/valoracion/valoracion.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    TrabajosComponent,
    PieComponent,
    ListadoTrabajosComponent,
    CabeceraComponent,
    TrabajodetalleComponent,
    ValoracionComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
