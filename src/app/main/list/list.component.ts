import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/locations.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  locations: any;

  constructor(
    private locationsService: LocationsService
  ) { }


  ngOnInit() {
    this.getLocations();
    console.log(this.locations);
  }

  getLocations() {
    this.locations = this.locationsService.getLocations();
    console.log(this.locations);
  }
}
