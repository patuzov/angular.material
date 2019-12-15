import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { MainComponent } from './main/main.component';
import { HotelSearchItemComponent } from './hotel-search-item/hotel-search-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    MainComponent,
    HotelSearchItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
