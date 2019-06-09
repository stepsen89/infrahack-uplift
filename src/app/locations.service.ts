import { Injectable } from '@angular/core';
import { locationJSON } from '../assets/raw.js';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  apiUrl: string = 'http://0.0.0.0:8000/api/all';
  //apiUrl: string = 'http://192.168.8.104:8000/api/all';


  constructor(
    private http: HttpClient,
  ) { }

  // getLocations() {
  //   // return locationJSON;

  //   this.httpClient.get(`${apiUrl}`)
  //     .subscribe((res) => {
  //       // this.router.navigate(['/heroes']);
  //       return res;
  //     });
  // }

  getLocations() {
    return this.http.get(this.apiUrl);
  }

}

