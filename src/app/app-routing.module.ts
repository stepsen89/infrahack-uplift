import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// set up routing for MVP

import { MainComponent } from './main/main.component';
import { ListComponent } from './main/list/list.component';
import { MapComponent } from './main/map/map.component';
import { CommunityComponent } from './main/community/community.component';
import { ReportingComponent } from './reporting/reporting.component';
import { FormIncidenceComponent } from './reporting/form-incidence/form-incidence.component';
import { FormInformationComponent } from './reporting/form-information/form-information.component';


// main containing views for
//  stations list
//  map
//  community

const routes: Routes = [
  { path: 'home',
    component: MainComponent,
    children: [{ 
        path: 'list',
        component: ListComponent
      },
      { 
        path: 'map',
        component: MapComponent
      },
      { 
        path: 'community',
        component: CommunityComponent
      }],
  }, {
    path: 'reporting',
    component: ReportingComponent,
    children: [{
      path: 'incidence',
      component: FormIncidenceComponent
    }, 
    {
      path: 'details',
      component: FormInformationComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }