import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { 
    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = ['select', 'name', 'location', 'price'];
  dataSource = new MatTableDataSource<Hotel>(HOTELS);
  selection = new SelectionModel<Hotel>(true, []);

  ngOnInit() {
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}

export interface Hotel {
  name: string;
  location: string;
  price: number;
}

const HOTELS = [{
  name: 'Mariott',
  location: 'Hamburg',
  price: 176
},
{
  name: 'Kempinski',
  location: 'Berlin',
  price: 215
},
{
  name: 'Crown Plaza',
  location: 'New York',
  price: 300
},
{
  name: 'Ibis',
  location: 'Köln',
  price: 89
}]