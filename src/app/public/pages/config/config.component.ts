import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormField} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-config',
  templateUrl: 'config.component.html',
  styleUrl: 'config.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormField, NgIf, FormsModule, MatInput],
})
export class ConfigComponent {

  buttonText: string = "Texto inicial";
  nombre: string = "Nombre";
  apellido: string = "Apellido";
  email: string = "Email";

  nombreEditable: boolean = false;
  apellidoEditable: boolean = false;
  emailEditable: boolean = false;

  guardarCambios(campo: string) {

    console.log("Guardando cambios para el campo: ", campo);
  }
}
