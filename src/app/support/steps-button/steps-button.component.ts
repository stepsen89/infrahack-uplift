import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-steps-button',
  templateUrl: './steps-button.component.html',
  styleUrls: ['./steps-button.component.scss']
})
export class StepsButtonComponent implements OnInit, AfterContentInit {
  @Input() buttonTitle: string;
  link: string;

  constructor() { }

  ngOnInit() {
    console.log(this.buttonTitle);
    if(this.buttonTitle === "Submit"){
      this.link = "/home/map";
    } else {
      this.link = "/reporting/details"
    }
  }

  ngAfterContentInit() {
    console.log(this.buttonTitle)
  }
}
