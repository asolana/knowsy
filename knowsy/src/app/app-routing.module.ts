import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { TrabajodetalleComponent } from './trabajos/trabajodetalle/trabajodetalle.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ValoracionComponent } from './trabajos/valoracion/valoracion.component';
import { NuevatareaComponent } from './usuario/nuevatarea/nuevatarea.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';

const routes: Routes = [
  {path: 'trabajos', component: TrabajosComponent, pathMatch: 'full'},
  {path: 'usuario/:id/nuevatarea/:tid', component:NuevatareaComponent, pathMatch: 'full'},
  {path: 'usuario/:id/nuevatarea', component:NuevatareaComponent, pathMatch: 'full'},
  {path: 'trabajos/:id', component: TrabajodetalleComponent, pathMatch: 'full'},
  {path: 'usuario/:id', component: UsuarioComponent, pathMatch: 'full'},
  {path: 'nuevoUsuario', component: NuevoUsuarioComponent, pathMatch: 'full'},
  {path: 'valoracion', component: ValoracionComponent, pathMatch: 'full'},
  {path: 'categorias', component: CategoriaComponent, pathMatch: 'full'},

  {path: 'categorias/:cid', component: TrabajosComponent, pathMatch: 'full'},
  
  {path: 'trabajos/:id/valoracion', component: ValoracionComponent, pathMatch: 'full'},
  {path: '', redirectTo:'trabajos', pathMatch: 'full'},
  { path: '**', component: TrabajosComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
