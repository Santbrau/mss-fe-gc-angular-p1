import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private clientes: any[] = [];
  private clientesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  agregarCliente(cliente: any) {
    this.clientes.push(cliente);
    this.clientesSubject.next(this.clientes);
  }

  obtenerClientes() {
    return this.clientesSubject.asObservable();
  }
}
