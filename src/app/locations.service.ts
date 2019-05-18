import { Injectable } from '@angular/core';
import { locationJSON } from '../assets/raw.js';
import { HttpClient } from '@angular/common/http';

const apiUrl = "http://192.168.8.100:8000/api/data";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLocations(url?: string){
    console.log("jljl");
    console.log(locationJSON);
    // this.httpClient.get(`${apiUrl}`)
    // .subscribe((res) => {console.log(res)})

    return locationJSON;

  }

  getSingleLocationByName(){
    return location;
  }
}

