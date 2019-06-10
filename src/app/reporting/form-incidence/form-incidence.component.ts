import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-incidence',
  templateUrl: './form-incidence.component.html',
  styleUrls: ['./form-incidence.component.scss']
})
export class FormIncidenceComponent implements OnInit {
  buttonValues: any;
  incidenceOption: string;

  constructor() { }

  ngOnInit() {
    this.buttonValues = [
      "Not Available",
      "Dirty",
      "Bumpy Ride",
      "Damage"
    ]
  }

  test(event: any){
    console.log(event.target.innerText);
    this.incidenceOption = event.target.innerText;
  }
}
