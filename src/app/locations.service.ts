import { Injectable } from '@angular/core';
import { locationJSON } from '../assets/raw.js';
import { HttpClient } from '@angular/common/http';

const apiUrl = "http://0.0.0.0:8000/api/all";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLocations(url?: string) {
    return locationJSON;
    this.httpClient.get(`${apiUrl}`)
      .subscribe((res) => {
        console.log(res);
        return res;
      });
  }
}

