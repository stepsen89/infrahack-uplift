import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-steps-button',
  templateUrl: './steps-button.component.html',
  styleUrls: ['./steps-button.component.scss']
})
export class StepsButtonComponent implements OnInit, AfterContentInit {
  @Input() buttonTitle: string;

  constructor() { }

  ngOnInit() {
    console.log(this.buttonTitle)
  }

  ngAfterContentInit() {
    console.log(this.buttonTitle)
  }
}
