import {Component} from '@angular/core';
import {map, Observable} from "rxjs";
import {
  GoogleMap,
  MapDirectionsRenderer,
  MapDirectionsService,
  MapHeatmapLayer,
  MapTrafficLayer
} from "@angular/google-maps";
import {MatFormField} from "@angular/material/form-field";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {AsyncPipe} from "@angular/common";
import {MatLabel} from "@angular/material/form-field";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-search-routes',
  standalone: true,
  imports: [
    GoogleMap,
    MapDirectionsRenderer,
    MapHeatmapLayer,
    MapTrafficLayer,
    MatFormField,
    MatButtonToggle,
    AsyncPipe,
    MatLabel,
    ReactiveFormsModule,
    MatInput
  ],
  templateUrl: './search-routes.component.html',
  styleUrl: './search-routes.component.css'
})
export class SearchRoutesComponent{


  textOrigen = "Ingrese Origen";
  textDestino = "Ingrese Destino";

  params: any = {
    componentRestrictions: { country: 'IN' }
  }

  options: google.maps.MapOptions = {
    mapId: "DEMO_MAP_ID",
    center: { lat: -12.0768506, lng: -77.0960512 },
    zoom: 15,
  };

  readonly directionsResults$: Observable<google.maps.DirectionsResult|undefined>;

  constructor(mapDirectionsService: MapDirectionsService) {
    const request: google.maps.DirectionsRequest = {
      destination: {lat: -12.0768559, lng: -77.0934763 },
      origin: {lat: -12.0820405, lng: -77.0358746},
      travelMode: google.maps.TravelMode.TRANSIT
    };
    this.directionsResults$ = mapDirectionsService.route(request).pipe(map(response => response.result));
  }


  ngOnInit(): void {}

}
