import { Component, OnInit } from '@angular/core';
// import * as L from '../../../../node_modules/leaflet';

import { latLng, LatLng, tileLayer, Layer, marker, circle, polygon, icon, geoJSON,  } from 'leaflet';
import { LocationsService } from 'src/app/locations.service';
import { LeafletLayersDemoModel } from './map.component.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
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
		layer: circle([ 46.95, -122 ], { radius: 5000 })
	};

layersControl: any;
// Values to bind to Leaflet Directive
layers: Layer[];

options = {
  zoom: 11,
  center: latLng(51.5074, 0.1278)
};

constructor(private locationsService: LocationsService) {
  this.apply();
}

apply() {
  const array = [];

  this.locations = this.locationsService.getLocations();

  this.locations.forEach(element => {
    let s_color;
    if (element.faulty_lifts > 0) {
    s_color = 'red';
      } else {
        s_color = 'green';
      }

    let popup = '<b>' + element.name + '</b><br>' + element.working_lifts + ' out of ' + element.total_lifts + ' lifts are working';

    if (element.fixed_aprox != null) {
      console.log(element.name + ' ' + element.fixed_aprox);
      if (element.fixed_aprox > 0) {
        popup += '<br> Based on average repair times, next lift will be fixed in ' + element.fixed_aprox + ' hours';
      } else {
        popup += '<br> Next lift should be fixed in: tba.';
      }
    }

  const obj = circle([ element.lat, element.lng ], { radius: 500, color: s_color});
  obj.bindPopup(popup);

  array.push({
					id: 'circle',
					name: 'Circle',
					enabled: true,
					layer: obj
				});
		});

		this.model = new LeafletLayersDemoModel(
			[ this.LAYER_OSM],
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
