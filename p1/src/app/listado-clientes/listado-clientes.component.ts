import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css'],
})
export class ListadoClientesComponent implements OnInit {
  clientes: any[] = [];

  constructor(private clientesService: ClientesService) {}

  ngOnInit() {
    this.clientesService.obtenerClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }
}
