import {Component, OnInit} from '@angular/core';
import { LocationsService } from 'src/app/locations.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QueryRef, Apollo } from 'apollo-angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  locations: any;

  constructor(
    private locationsService: LocationsService
  ) {

    locationsService.getLocations().subscribe(result => {
      this.locations = result.data;
    });

  }
}
