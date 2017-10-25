import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  public now: Date;
  private _timer: NodeJS.Timer;

  constructor() { }

  ngOnInit(): void {
    this.now = new Date();

    this._timer = setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this._timer);
  }

}
