import { Component, OnInit } from '@angular/core'; 
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {  
  constructor() { }

  options: any = {

    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: L.latLng(46.879966, -121.726909)
  }

  ngOnInit() {
  }

}
