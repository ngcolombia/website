import { Component } from '@angular/core';
import { trigger, transition, animate , style} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('showMedia', [
      transition(':leave', animate('100ms ease-out', style({transform: 'translateX(100%)', opacity: 0}))),
    ]),
  ]
})
export class HomeComponent {

  showMedia = true;

  onFooterToogle(infoState: string) {
    this.showMedia = infoState === 'hide';
  }

}
