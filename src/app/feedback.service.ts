import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = "http://192.168.8.100:8000/api/sent";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public sendReport(report: any, url?: string) {
    console.log(report);
    return null;
  }
}