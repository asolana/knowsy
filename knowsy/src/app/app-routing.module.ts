import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrabajosComponent } from './trabajos/trabajos.component';

const routes: Routes = [
  {path: 'trabajos', component: TrabajosComponent, pathMatch: 'full'},
  {path: '', redirectTo:'trabajos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
