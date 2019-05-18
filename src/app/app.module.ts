import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
