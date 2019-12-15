import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './hotel/search/search.component';
import { FlightComponent } from './flight/flight.component';
import { CarComponent } from './car/car.component';


const routes: Routes = [
  {path: "", component: SearchComponent},
  {path: "flight", component: FlightComponent},
  {path: "car", component: CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
