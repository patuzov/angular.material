import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  hotels = ['Crowne Plaza', 'Kempinski', 'Vier Jahreszeiten', 'Ibis Budget'];

  debug: string;

  ngOnInit() {
    this.debug = JSON.stringify(this.hotels);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.hotels, event.previousIndex, event.currentIndex);
    this.debug = JSON.stringify(this.hotels);
  }

}
