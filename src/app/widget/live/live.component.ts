import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  public isOnline: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isOnline = window.navigator.onLine;

    window.ononline = (evt: Event): void => { this.isOnline = true; };
    window.onoffline = (evt: Event): void => { this.isOnline = false; };
  }

}
