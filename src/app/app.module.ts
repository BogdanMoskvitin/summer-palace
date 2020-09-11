import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgencyComponent } from './agency/agency.component';
import { CateringComponent } from './catering/catering.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TouristsComponent } from './tourists/tourists.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [
    AppComponent,
    AgencyComponent,
    CateringComponent,
    EventComponent,
    HomeComponent,
    NavigationComponent,
    TouristsComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
