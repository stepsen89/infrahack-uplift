import { Injectable } from '@angular/core';
import { locations } from '../assets/mock-locations';

const env = "http://192.168.8.100:8000/api/data";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor() { }

  getLocations(){
    console.log(env);
    return locations;
  }

  getSingleLocationByName(){
    return location;
  }
}

