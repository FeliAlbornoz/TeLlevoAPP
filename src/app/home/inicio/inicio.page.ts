import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';

declare var google;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  

  constructor(private crud: CrudService) { }

  async agregar(txtSede:HTMLSelectElement, txtDestino:HTMLInputElement, txtTarifa:HTMLInputElement, txtPasajero:HTMLInputElement, txtHora:HTMLInputElement, txtPatente:HTMLInputElement){
    const datos = [{"Origen": txtSede.value,
                    "Destino": txtDestino.value,
                    "Tarifa": txtTarifa.value,
                    "Pasajero": txtPasajero.value,
                    "Hora": txtHora.value,
                    "Patente": txtPatente.value,
    }]

    await this.crud.agregar(datos);
  }

  map = null;

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: -33.51591495113734, lng: -70.59814630188485};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 15
    });
    
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
    });
  }


}
