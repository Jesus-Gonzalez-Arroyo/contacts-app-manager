import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../interfaces/contact.interface.js'

/**
 * @class ContactService
 * @description Encargado de manejar la lógica de acceso a datos relacionada con contactos.
 */

@Injectable()
export class ContactService {
  private api = 'http://localhost:3000/api/contacts';

  constructor(private http: HttpClient) {}

  /**
   * Consume el servicio para obtener todos los contactos.
   * @returns Lista de contactos obtenida desde el servidor.
   */

  getContacts() {
    return this.http.get<Array<[]>>(this.api);
  }

  /**
   * Crea un nuevo contacto.
   * @param data Datos del contacto a crear.
   * @returns respuesta del servidor al crear el contacto.
   */

  createContact(data: Contact) {
    return this.http.post(this.api, data);
  }

  /**
   * Actualiza un contacto existente.
   * @param id id del contacto a actualizar.
   * @param data información del contacto actualizada.
   * @returns informacion del contacto actualizado.
   */

  updateContact(id: string, data: Contact) {
    return this.http.put(`${this.api}/${id}`, data);
  }

  /**
   * Elimina un contacto.
   * @param id id del contacto a eliminar.
   * @returns respuesta del servidor al eliminar el contacto.
   */

  deleteContact(id: string) {
    return this.http.delete(`${this.api}/${id}`);
  }
}