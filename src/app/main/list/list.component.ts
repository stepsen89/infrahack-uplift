import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { LocationsService } from 'src/app/locations.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  locations: any;
  counter: number;

  private locationsObservable : Observable<any[]> ;


  constructor(
    private cdr: ChangeDetectorRef,

    private locationsService: LocationsService,
    private router: Router
  ) { 
    this.locationsService.getLocations().subscribe((res : any[])=>{
      // console.log(res);
      this.locations = res;
  });
  }

  ngOnInit() {
      console.log("I am called");
      console.log("rendered");
      // console.log(this.locations);
  }

}
