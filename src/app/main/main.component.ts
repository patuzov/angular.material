import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  hotels = ['Crowne Plaza', 'Kempinski', 'Vier Jahreszeiten', 'Ibis Budget']

  ngOnInit() {
  }

  filter(): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);      
      console.log('The dialog was closed');
    });
  }

}
