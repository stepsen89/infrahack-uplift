import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { FeedbackService } from 'src/app/feedback.service';

@Component({
  selector: 'app-steps-button',
  templateUrl: './steps-button.component.html',
  styleUrls: ['./steps-button.component.scss']
})
export class StepsButtonComponent implements OnInit, AfterContentInit {
  @Input() buttonTitle: string;

  link: string;
  id: string;

  constructor(
    private feedbackService: FeedbackService
  ) { }

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

  sendReport(id: string){
    console.log(id);
    this.feedbackService.sendReport(id);
  }
}
