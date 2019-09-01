import { Injectable } from '@angular/core';
import { locationJSON } from '../assets/raw.js';
import { HttpClient } from '@angular/common/http';

import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private query: QueryRef<any>;

  constructor(
    private http: HttpClient,
    private apollo: Apollo
  ) { }

  private queryString = gql`
      {
        stations {
          edges {
            node {
              id
              name
              lng
              lat
              faults
              lifts
            }
          }
        }
    }`;

  public getLocations() {

    this.query = this.apollo.watchQuery({
      query: this.queryString,
      variables: {}
    });

    return this.query.valueChanges;
  }

  getFaultyOnes(){
    const FAULTY_STATION_QUERY = gql`{
      faultyStations {
          id
          name
          lng
          lat
      }
    }`

    this.query = this.apollo.watchQuery({
      query: FAULTY_STATION_QUERY,
      variables: {}
    });
  }

}

