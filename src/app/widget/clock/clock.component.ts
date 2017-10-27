import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  public now: Date;
  public ticTac: boolean;
  private _timer: NodeJS.Timer;

  constructor() { }

  ngOnInit(): void {
    this._getNow();
  }

  ngOnDestroy(): void {
    clearTimeout(this._timer);
  }

  private _getNow(): void {
    this.now = new Date();
    this.ticTac = !this.ticTac;

    this._timer = setTimeout(() => this._getNow(), 1000);
  }

}
