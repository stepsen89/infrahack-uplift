import {Component, OnInit} from '@angular/core';
// import * as L from '../../../../node_modules/leaflet';

import {latLng, LatLng, tileLayer, Layer, marker, circle, polygon, icon, geoJSON,} from 'leaflet';
import {LocationsService} from 'src/app/locations.service';
import {LeafletLayersDemoModel} from './map.component.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent {
  deviceLocation: any = [];

  locations: any;
  model: any;
  LAYER_OSM = {
    id: 'openstreetmap',
    name: 'Open Street Map',
    enabled: false,
    layer: tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Open Street Map'
    })
  };

  circle = {
    id: 'circle',
    name: 'Circle',
    enabled: true,
    layer: circle([46.95, -122], {radius: 5000})
  };

  layersControl: any;
// Values to bind to Leaflet Directive
  layers: Layer[];

// private locationsObservable : Observable<any[]> ;

  options = {
    zoom: 10,
    center: latLng(51.5074, 0.1278)
  };

  constructor(private locationsService: LocationsService) {
    this.locationsService.getLocations().subscribe(result => {
      this.locations = result.data;
      this.apply();
    });
  }

// locationDetection() {
// 	let deviceLocation = [];
// 	if(navigator.geolocation){
// 		navigator.geolocation.getCurrentPosition(displayLocationInfo);
// 		console.log(deviceLocation);
// 		this.options.center = latLng(42.111, 11.8989);
// 		this.options.center = latLng(deviceLocation[1], deviceLocation[0]);
// 		console.log(this.options.center)
// 	}

// 	function displayLocationInfo(position) {
// 		const lng = position.coords.longitude;
// 		const lat = position.coords.latitude;
// 		deviceLocation.push(lng, lat);
// 		console.log(deviceLocation);

// 		console.log(deviceLocation)

// 		console.log(`longitude: ${ lng } | latitude: ${ lat }`);
// 	}
// }

  apply() {

    const array = [];
    this.locations.stations.edges.forEach(element => {
      element = element.node;
      let s_color;
      if (element.faults.length > 0) {
        s_color = 'red';
      } else {
        s_color = 'green';
      }

      let popup = '<b>' + element.name + '</b><br>' + (element.lifts.length - element.faults.length) + ' out of ' + element.lifts.length + ' lifts are working' + '</b><br>' + element.incidents.edges.length + ' user reports within the last hour'

      if (element.avgRepair != null && element.faults.length > 0) {

        popup += '<br> Averaged repair time: ' + (element.avgRepair / 3600).toFixed(1) + ' hours';

      }

      const obj = circle([element.lat, element.lng], {radius: 500, color: s_color});
      obj.bindPopup(popup);

      array.push({
        id: 'circle',
        name: 'Circle',
        enabled: true,
        layer: obj
      });
    });

    this.model = new LeafletLayersDemoModel(
      [this.LAYER_OSM],
      this.LAYER_OSM.id,
      array
      // [ this.circle ]
    );

    this.layersControl = {
      baseLayers: {
        'Open Street Map': this.LAYER_OSM.layer,
      },
      overlays: {
        Circle: this.circle.layer,

      }
    };

    // Get the active base layer
    const baseLayer = this.model.baseLayers.find((l: any) => (l.id === this.model.baseLayer));

    // Get all the active overlay layers
    const newLayers = this.model.overlayLayers
      .filter((l: any) => l.enabled)
      .map((l: any) => l.layer);
    newLayers.unshift(baseLayer.layer);

    this.layers = newLayers;

    return false;
  }
}
