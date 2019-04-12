import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { TrabajodetalleComponent } from './trabajos/trabajodetalle/trabajodetalle.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
  {path: 'trabajos', component: TrabajosComponent, pathMatch: 'full'},
  {path: 'trabajos/:id', component: TrabajodetalleComponent, pathMatch: 'full'},
  {path: 'usuario/:id', component: UsuarioComponent, pathMatch: 'full'},
  {path: 'categorias', component: CategoriaComponent, pathMatch: 'full'},
  {path: '', redirectTo:'trabajos', pathMatch: 'full'},
  { path: '**', component: TrabajosComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
