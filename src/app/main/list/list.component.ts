import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { LocationsService } from 'src/app/locations.service';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'http://0.0.0.0:8000/api/all';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  locations: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private locationsService: LocationsService
  ) { }

  ngOnInit() {
      this.locations = this.locationsService.getLocations();
      this.cdr.detectChanges();
  }

}
