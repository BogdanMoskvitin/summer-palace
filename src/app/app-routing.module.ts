import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { TouristsComponent } from './tourists/tourists.component';
import { CateringComponent } from './catering/catering.component';
import { AgencyComponent } from './agency/agency.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    component: HomeComponent
}, {
    path: 'event',
    component: EventComponent
}, {
    path: 'tourists',
    component: TouristsComponent
}, {
    path: 'catering',
    component: CateringComponent
}, {
    path: 'agency',
    component: AgencyComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}