import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-footer-home',
  templateUrl: './footer-home.component.html',
  styleUrls: ['./footer-home.component.scss'],
  animations: [
    trigger('showInfo', [
      state('show', style({
        bottom: '0',
      })),
      state('hide', style({
        bottom: '-160px',
      })),
      transition('hide <=> show', animate('300ms ease-out'))
    ]),
  ]
})
export class FooterHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  infoState = 'hide';

  toggleInfo() {
    this.infoState = (this.infoState === 'hide' ? 'show' : 'hide');
  }

}
