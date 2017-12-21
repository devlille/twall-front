import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public isChti: Boolean;
  private _timer: NodeJS.Timer;

  constructor() { }

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
