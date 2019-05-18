import { Injectable } from '@angular/core';
import { locations } from '../assets/mock-locations';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor() { }

  getLocations(){
    console.log("called");
    return locations;
  }

  getSingleLocationByName(){
    return location;
  }
}
