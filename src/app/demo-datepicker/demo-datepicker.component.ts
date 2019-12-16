import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';

import * as moment from 'moment';

@Component({
  selector: 'app-demo-datepicker',
  templateUrl: './demo-datepicker.component.html',
  styleUrls: ['./demo-datepicker.component.scss']
})
export class DemoDatepickerComponent implements OnInit {

  constructor() { }

  value = moment();

  ngOnInit() {
  }

  onChange(event: MatDatepickerInputEvent<Date>): void {
    console.log(event.value);
  }
}
