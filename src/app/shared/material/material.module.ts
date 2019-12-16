import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatDialogModule,
  MatListModule,
  MatExpansionModule
} from '@angular/material';


const modules = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatDialogModule,
  MatListModule,
  MatExpansionModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class MaterialModule { }
