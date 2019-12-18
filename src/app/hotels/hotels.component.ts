import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointState, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XSmall
  );

  hotels = ['Crown Plaza', 'Kempinski', "Ibis Budget"];
  
  constructor(public dialog: MatDialog,
    private readonly breakpointObserver: BreakpointObserver,) { }

  ngOnInit() {
  }

  openFilterDialog(): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '500px',
      maxWidth: '100vw'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      smallDialogSubscription.unsubscribe();
    });

    const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
      if (size.matches) {
        dialogRef.updateSize('100vw', '100vh');
      } else {
        dialogRef.updateSize('500px', '');
      }
    });
  }

}
