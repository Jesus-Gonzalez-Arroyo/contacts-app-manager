import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Router } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Contact, Error} from '../../interfaces/contact.interface'
import swat from 'sweetalert2';

/**
 * @class ContactFormComponent
 * @description componente con la vista y funciones para agregar y actualizar los contactos
 */

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.css'],
  providers: [ContactService]
})
export class ContactFormComponent {
  @Output() refresh = new EventEmitter<void>();
  form: FormGroup;
  isEditing = false;
  contactId: string | null = null;
  contact: Contact | null = null;

  constructor(
    private fb: FormBuilder,
    private service: ContactService,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.contact = navigation?.extras?.state?.['contact'] || null;

    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });

    if (this.contact) {
      this.isEditing = true;
      this.contactId = this.contact._id ?? null;
      this.form.patchValue(this.contact);
    }
  }

  /**
   * Envía el formulario para crear o actualizar un contacto.
   * Valida los campos requeridos y maneja la respuesta del servicio.
   */

  onSubmit() {
    if (!this.form.valid) {
      this.alert('Error', 'Por favor, completa todos los campos requeridos.');
      return
    };

    const contact = this.form.value;

    if (this.isEditing && this.contactId) {
      this.service.updateContact(this.contactId, contact).subscribe({
        next: () => this.handleSuccess(),
        error: (err) => this.handleError(err)
      });
    } else {
      this.service.createContact(contact).subscribe({
        next: () => this.handleSuccess(),
        error: (err) => this.handleError(err)
      });
    }
  }

  /**
   * Maneja la respuesta exitosa de la creación o actualización del contacto.
   * Emite un evento para refrescar la lista de contactos y resetea el formulario
   */

  private handleSuccess() {
    this.refresh.emit();
    this.resetForm();
  }

  /**
   * valida el error recibido y muestra una alerta con el mensaje de error.
   * @param error 
   */

  private handleError(error: Error) {
    if (error?.error?.error) {
      this.alert('Error', error.error.error)
    } else {
      this.alert('Error', 'Ocurrió un error inesperado. Intenta de nuevo.')
    }
  }

  /**
   * Resetea el formulario y redirige a la página principal.
   */

  private resetForm() {
    this.form.reset();
    this.isEditing = false;
    this.contactId = null;
    this.router.navigate(['/']);
  }

  /**
   * Muestra una alerta con el mensaje y el icono especificado desde donde es llamada.
   * @param title titulo de la alerta
   * @param text texto de la alerta
   * @param icon icon de la alerta, puede ser 'success' o 'error'
   * @returns una promesa que se resuelve cuando el usuario cierra la alerta
   */

  private alert(title: string, text: string, icon: 'success' | 'error' = 'error') {
    return swat.fire({
      title,
      icon,
      text
    })
  }
}
