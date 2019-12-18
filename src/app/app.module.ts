import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HotelSearchItemComponent } from './hotel-search-item/hotel-search-item.component';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HotelsComponent } from './hotels/hotels.component';
import { OfferComponent } from './offer/offer.component';
import { AnymationsComponent } from './anymations/anymations.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelSearchItemComponent,
    FilterDialogComponent,
    HotelsComponent,
    OfferComponent,
    AnymationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [FilterDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
