import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-anymations',
  templateUrl: './anymations.component.html',
  styleUrls: ['./anymations.component.scss'],
  animations: [
    trigger('temperatureTrigger', [
      state('cold', style({backgroundColor: 'blue'})),
      state('hot', style({backgroundColor: 'red'})),
      transition('cold <=> hot', animate('1s'))
    ]),
    trigger('playStateTrigger', [
      state('stopped', style({})),
      state('playing', style({})),
      transition('stopped <=> playing', animate('300ms', keyframes([
        style({opacity: 1, transform: 'rotate(0)', offset: 0}),
        style({opacity: 1, transform: 'rotate(70deg)', offset: 0.7}),
        style({opacity: 0, transform: 'rotate(10deg)', offset: 0.99}),
        style({opacity: 1, transform: 'rotate(0)', offset: 1.0})
      ])))
    ])
  ]
})
export class AnymationsComponent implements OnInit {

  buttonState = 'hot';
  fabIcon = 'play_arrow';
  playState = 'stopped';

  constructor() { }

  ngOnInit() {
  }

  toggleButtonState(): void {
    this.buttonState = this.buttonState === 'hot' ? 'cold' : 'hot'; 
  }

  toggleFab(): void {
    this.playState = this.playState === 'stopped' ? 'playing' : 'stopped';
  }

  playStateAnimationDone(): void {

    this.fabIcon = this.playState === 'stopped' ? 'play_arrow' : 'pause';
  }

}
