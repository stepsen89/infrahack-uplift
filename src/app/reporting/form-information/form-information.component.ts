import {Component, OnInit} from '@angular/core';
import {FeedbackService} from 'src/app/feedback.service';
import {LocationsService} from 'src/app/locations.service';

@Component({
  selector: 'app-form-information',
  templateUrl: './form-information.component.html',
  styleUrls: ['./form-information.component.scss']
})
export class FormInformationComponent implements OnInit {
  locations: any;
  selectedStation: string;

  constructor(
    public locationService: LocationsService,
    public feedbackService: FeedbackService
  ) {
    locationService.getLocations().subscribe(result => {
      this.locations = result.data;
    });
  }

  ngOnInit() {
  }

  click(station: any) {
    console.log(station.id);
    this.selectedStation = station.id;
  }

  // constructor(
  //   private locationsService: LocationsService,
  //   private router: Router
  // ) {
  //   this.locationsService.getLocations().subscribe((res : any[])=>{
  //     // console.log(res);
  //     this.locations = res;
  // });
  // }

}
