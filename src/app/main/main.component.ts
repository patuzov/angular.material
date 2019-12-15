import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  hotels = ['Crowne Plaza', 'Kempinski', 'Vier Jahreszeiten', 'Ibis Budget']

  ngOnInit() {
  }

}
