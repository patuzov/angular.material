import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    hotelFeatures = ['Air conditioning', 'Garage', 'Bar', 'Lift', 'Sauna', 'Restaurant'];
    selectedHotelFeatures: string[] = [];
    
    roomFeatures = ['Bathtub', 'Cable TV', 'Desk', 'Safe'];
    selectedRoomFeatures: string[] = [];

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close({
      hotelFeatures: this.selectedHotelFeatures,
      roomFeatures: this.selectedRoomFeatures
    });
  }

}
