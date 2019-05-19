import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { LocationsService } from 'src/app/locations.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const apiUrl = 'http://0.0.0.0:8000/api/all';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  locations: any;
  counter: number;

  constructor(
    private cdr: ChangeDetectorRef,
    private locationsService: LocationsService,
    private router: Router
  ) { }

  ngOnInit() {
      console.log("jljkl");
      this.locations = this.locationsService.getLocations();
      console.log(this.locations, "rendered");
  }
}
