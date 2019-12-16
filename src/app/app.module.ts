import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { MainComponent } from './main/main.component';
import { HotelSearchItemComponent } from './hotel-search-item/hotel-search-item.component';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SettingsComponent } from './settings/settings.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DemoDatepickerComponent } from './demo-datepicker/demo-datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    MainComponent,
    HotelSearchItemComponent,
    FilterDialogComponent,
    SettingsComponent,
    SearchBarComponent,
    DemoDatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  entryComponents: [FilterDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
