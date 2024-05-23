import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-promos',
  standalone: true,
  imports: [
    MatCard,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
    NgForOf,
    NgIf
  ],
  templateUrl: './promos.component.html',
  styleUrl: './promos.component.css'
})
export class PromosComponent {
  promociones = [
    { title: '2x1 en pasajes', description: 'Viaja 2 personas y paga 1', date:'xx/xx/xx', src:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/2017_Lima_-_Autob%C3%BAs_en_la_avenida_Alfonso_Ugarte_cerca_del_plaza_Dos_de_Mayo.jpg/1280px-2017_Lima_-_Autob%C3%BAs_en_la_avenida_Alfonso_Ugarte_cerca_del_plaza_Dos_de_Mayo.jpg' },
    { title: '3 pizzas familiares', description: 'Americana + gaseosa + pizza rolls', date:'xx/xx/xx', src:'https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/pizza-3.jpg' },
    { title: '3 pizzas familiares', description: '1 pollo + porción de papas + ensalada + gaseosa de 3lts', date:'xx/xx/xx', src:'https://peru21.pe/resizer/bodZRggxNDfCz6upbEVfpsLqUbk=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/WKLKU6YQTJEZJLSWM3CUZZ37AA.jpg' },
    { title: '2x1 en pasajes', description: 'Viaja 2 personas y paga 1', date:'xx/xx/xx', src:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/2017_Lima_-_Autob%C3%BAs_en_la_avenida_Alfonso_Ugarte_cerca_del_plaza_Dos_de_Mayo.jpg/1280px-2017_Lima_-_Autob%C3%BAs_en_la_avenida_Alfonso_Ugarte_cerca_del_plaza_Dos_de_Mayo.jpg' },
    { title: '3 pizzas familiares', description: 'Americana + gaseosa + pizza rolls', date:'xx/xx/xx', src:'https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/pizza-3.jpg' },
    { title: '3 pizzas familiares', description: '1 pollo + porción de papas + ensalada + gaseosa de 3lts', date:'xx/xx/xx', src:'https://peru21.pe/resizer/bodZRggxNDfCz6upbEVfpsLqUbk=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/WKLKU6YQTJEZJLSWM3CUZZ37AA.jpg' },
  ];
}
