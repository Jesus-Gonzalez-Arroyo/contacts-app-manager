import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from '../../services/contact.service';
import {Contact} from '../../interfaces/contact.interface'

/**
 * @class ContactListComponent
 * @description componente principal, obtiene todos los contactos y nos permite buscarlos o eliminarlos
 */
@Component({
  selector: 'app-contact-list',
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {
  contacts: any[] = [];
  searchTerm = '';
  @Output() loaded = new EventEmitter<void>();

  constructor(
    private service: ContactService,
    private router: Router
  ) {}

  ngOnInit() {
    this.load();
  }

  /**
   * Carga los contactos desde el servicio y emite un evento cuando se completa.
   */

  load() {
    this.service.getContacts().subscribe(data => {
      this.contacts = data;
      this.loaded.emit();
    });
  }

  /**
   * Redirige a la página de creación de contactos.
   */

  create() {
    this.router.navigate(['/form']); 
  }

  /**
   * Redirige a la página de edición de contactos con el contacto seleccionado.
   * @param contact contacto a editar
   */

  edit(contact: Contact) {
    this.router.navigate(['/form'], { state: { contact } });
  }

  /**
   * Elimina un contacto y recarga la lista de contactos.
   * @param id id del contacto a eliminar
   */

  delete(id: string) {
    this.service.deleteContact(id).subscribe(() => this.load());
  }

  /**
   * Filtra los contactos por el término de búsqueda.
   * @returns lista de contactos filtrados
   */

  filteredContacts() {
    return this.contacts.filter(c =>
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}