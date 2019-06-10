import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/feedback.service';
import { LocationsService } from 'src/app/locations.service';

@Component({
  selector: 'app-form-information',
  templateUrl: './form-information.component.html',
  styleUrls: ['./form-information.component.scss']
})
export class FormInformationComponent implements OnInit {
  stations: any;
  selectedStation: string;

  constructor(
    public locationService: LocationsService
  ) { 
    this.locationService.getLocations().subscribe((res: any[])=>{
      this.stations = res;
    });
  }

  ngOnInit() {
    // this.stations = this.locationService.getLocations();
    console.log(this.stations);
  }

  click(station: any) {
    console.log(station._id);
    this.selectedStation = station._id;
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
