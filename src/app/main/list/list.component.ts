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
  counter: number;

  private query: QueryRef<any>;

  private locationsObservable : Observable<any[]> ;

  constructor(
    private locationsService: LocationsService,
    private router: Router,
    private apollo: Apollo
  ) {

    this.query = this.apollo.watchQuery({
      query: this.locationsService.getLocations(),
      variables: {}
    });


    this.query.valueChanges.subscribe(result => {
      this.locations = result.data;
      console.log(this.locations);
    });
  }
}
