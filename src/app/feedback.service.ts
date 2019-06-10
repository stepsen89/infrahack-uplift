import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { send } from 'q';

const apiUrl = "http://uplift.glitch.me/api/send";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  report: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  public sendReport(id: string) {
    // const data = {
    //   incident_type: 1,
    //   station: "5cdf34c0a939ca8d40d5ec54"
    // }
    const data = {
      incident_type: 1,
      station: id
    }
    console.log(data);
    return this.httpClient.post(apiUrl, data)
    // incident_type=1&station=5cdf34c0a939ca8d40d5ec54
    this.report = {
      issue: 0,
      station: 0
    }
  }
}