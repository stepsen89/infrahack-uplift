import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListComponent } from './main/list/list.component';
import { ListItemComponent } from './main/list/list-item/list-item.component';
import { CommunityComponent } from './main/community/community.component';
import { UserComponent } from './main/community/user/user.component';
import { FaultReportComponent } from './support/fault-report/fault-report.component';
import { FavoriteListComponent } from './main/community/favorite-list/favorite-list.component';
import { FavoriteItemComponent } from './main/community/favorite-list/favorite-item/favorite-item.component';
import { MedalsListComponent } from './main/community/medals-list/medals-list.component';
import { MapComponent } from './main/map/map.component';
import { HeaderComponent } from './header/header.component';
import { LocationsService } from './locations.service';
import { MedalComponent } from './main/community/medals-list/medal/medal.component';
import { ReportingComponent } from './reporting/reporting.component';
import { FormIncidenceComponent } from './reporting/form-incidence/form-incidence.component';
import { FormInformationComponent } from './reporting/form-information/form-information.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { StepsButtonComponent } from './support/steps-button/steps-button.component';
// apollo graphql
import { GraphQLModule } from './graphql.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    ListItemComponent,
    CommunityComponent,
    UserComponent,
    FaultReportComponent,
    FavoriteListComponent,
    FavoriteItemComponent,
    MedalsListComponent,
    MapComponent,
    HeaderComponent,
    MedalComponent,
    ReportingComponent,
    FormIncidenceComponent,
    FormInformationComponent,
    SplashscreenComponent,
    StepsButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule.forRoot(),
    HttpClientModule,
    GraphQLModule
  ],
  providers: [
    LocationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
