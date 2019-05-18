import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// set up routing for MVP

import { MainComponent } from './main/main.component';
import { ListComponent } from './main/list/list.component';
import { MapComponent } from './main/map/map.component';
import { CommunityComponent } from './main/community/community.component';

const routes: Routes = [
  { path: 'home',
    component: MainComponent,
    children: [{ 
      path: 'stations',
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }