import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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

  infoState = 'hide';
  @Output() onToggle = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  toggleInfo() {
    this.infoState = (this.infoState === 'hide' ? 'show' : 'hide');
    this.onToggle.emit(this.infoState);
  }

}
