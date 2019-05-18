import { Component, OnInit } from '@angular/core'; 
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {  
  constructor() { }

  // mymap: any = L.map('mapid').setView([51.505, -0.09], 13);
  // data: any;
      
      ngOnInit() {
  //       L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  //         maxZoom: 18,
  //         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
  //           '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  //           'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //       }).addTo(this.mymap);

  //       this.data = "test";
        
  //       L.marker([51.5308818372572, -0.122925992140273]).addTo(this.mymap)
  //           .bindPopup("This is a mockup :)")
  //           .openPopup();
      
  //       console.log(this.data);
  }

}
