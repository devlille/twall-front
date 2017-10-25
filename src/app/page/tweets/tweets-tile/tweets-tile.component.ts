import { Component, OnInit, Input } from '@angular/core';

import { Tweet } from './../../../shared/model/tweet';

@Component({
  selector: 'app-tweets-tile',
  templateUrl: './tweets-tile.component.html',
  styleUrls: ['./tweets-tile.component.css']
})
export class TweetsTileComponent implements OnInit {

  @Input()
  public tweet: Tweet;

  constructor() { }

  ngOnInit() {
  }

}
