import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';

const routes: Routes = [
  { path: 'alta-cliente', component: AltaClienteComponent },
  { path: 'listado-clientes', component: ListadoClientesComponent },
  { path: '', redirectTo: '/alta-cliente', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }