import { Injectable } from '@angular/core';
import { locations } from '../assets/mock-locations';
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
    console.log(apiUrl);
    this.httpClient.get(`${apiUrl}`)
    .subscribe((res) => {console.log(res)})


  }

  getSingleLocationByName(){
    return location;
  }
}

