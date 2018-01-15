import {animate, style, transition, trigger} from '@angular/animations';
import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('easeIn', [
      transition(
        ':enter',
        [
          style({opacity: 0}),
          animate('500ms ease-in', style({opacity: 1}))
        ])
    ])
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {

  public isChti: boolean;
  private _timer: NodeJS.Timer;

  constructor() {
  }

  ngOnInit(): void {
    this.toggleLang();
  }

  ngOnDestroy(): void {
    clearTimeout(this._timer);
  }

  private toggleLang(): void {
    this.isChti = !this.isChti;
    this._timer = setTimeout(() => this.toggleLang(), 10000);
  }

}
