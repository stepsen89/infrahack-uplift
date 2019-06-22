import { Injectable } from '@angular/core';
import { locationJSON } from '../assets/raw.js';
import { HttpClient } from '@angular/common/http';

import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  // apiUrl: string = 'http://0.0.0.0:8000/api/all';
  //apiUrl: string = 'http://192.168.8.104:8000/api/all';
  private query: QueryRef<any>

  constructor(
    private http: HttpClient,
    private apollo: Apollo
  ) { }

  
  getLocations() {
    const ALL_STATIONS = gql`
      {
        allStations {
          edges {
            node {
              id
              name
              lng
              lat
            }
          }
        }
    }`;
    console.log('all stations called');
    console.log(ALL_STATIONS);

    return ALL_STATIONS;

    this.query = this.apollo.watchQuery({
      query: ALL_STATIONS,
      variables: {}
    });

    // return this.http.get(this.apiUrl);

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

