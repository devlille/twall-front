import { Component, OnInit } from '@angular/core';

import { Tweet } from './../../../shared/model/tweet';
import { TweetsService } from './../../../shared/service/tweets.service';

@Component({
  selector: 'app-tweets-grid-list',
  templateUrl: './tweets-grid-list.component.html',
  styleUrls: ['./tweets-grid-list.component.css']
})
export class TweetsGridListComponent implements OnInit {

  public tweets: Array<Tweet>;

  constructor(private tweetsService: TweetsService) { }

  ngOnInit() {
    this.tweetsService
      .getTweets()
      .subscribe(
        tweets => this.tweets = tweets,
        err => console.log('ERR')
      );
  }

}
