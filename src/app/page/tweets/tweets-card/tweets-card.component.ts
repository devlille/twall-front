import { Component, OnInit, Input } from '@angular/core';

import { Tweet } from './../../../shared/model/tweet';

@Component({
  selector: 'app-tweets-card',
  templateUrl: './tweets-card.component.html',
  styleUrls: ['./tweets-card.component.css']
})
export class TweetsCardComponent implements OnInit {

  @Input()
  public tweet: Tweet;

  constructor() { }

  ngOnInit(): void {}

}
