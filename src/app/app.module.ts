import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlightComponent } from './flight/flight.component';
import { CarComponent } from './car/car.component';
import { HotelModule } from './hotel/hotel.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    FlightComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HotelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
