import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  selectedHotelFeatures = [];
  hotelFeatures = ['wifi', 'restaurant', 'gym', 'parking'];
  selectedRoomFeatures = [];
  roomFeatures = ['wifi', 'bathtub', 'desk', 'safe'];

  ngOnInit() {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close({
      hotelFeatures: this.selectedHotelFeatures,
      roomFeatures: this.selectedRoomFeatures
    });
  }

}
