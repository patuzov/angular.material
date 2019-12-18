import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-search-item',
  templateUrl: './hotel-search-item.component.html',
  styleUrls: ['./hotel-search-item.component.scss']
})
export class HotelSearchItemComponent implements OnInit {

  @Input() hotel: string;
  constructor() { }

  ngOnInit() {
  }

}
