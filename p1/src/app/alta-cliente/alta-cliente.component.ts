import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {
  nombre: string = '';
  cif: string = '';
  direccion: string = '';
  grupo: string = '';
  clientes: any[] = [];

  constructor(private clientesService: ClientesService) {}

  ngOnInit() {
    this.clientesService.obtenerClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  guardarCliente() {
    const nuevoCliente = {
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo
    };
  
    this.clientesService.agregarCliente(nuevoCliente);
    this.limpiarCampos();
  }
  

  limpiarCampos() {
    this.nombre = '';
    this.cif = '';
    this.direccion = '';
    this.grupo = '';
  }
}
