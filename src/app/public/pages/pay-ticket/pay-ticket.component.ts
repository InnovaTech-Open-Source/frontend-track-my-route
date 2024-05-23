import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect, MatLabel} from "@angular/material/select";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-pay-ticket',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    MatButton
  ],
  templateUrl: './pay-ticket.component.html',
  styleUrl: './pay-ticket.component.css'
})
export class PayTicketComponent {

}
