import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private locationsService : LocationsService
  ) { }

  ngOnInit() {
    this.locationsService.getLocations();
  }

}
