import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Tweet } from './../../../shared/model/tweet';
import { TweetsService } from './../../../shared/service/tweets.service';

@Component({
  selector: 'app-tweets-grid-list',
  templateUrl: './tweets-grid-list.component.html',
  styleUrls: ['./tweets-grid-list.component.css']
})
export class TweetsGridListComponent implements OnInit, OnDestroy {

  public tweets: Array<Tweet>;
  private _timer: NodeJS.Timer;
  private _refreshFrequency: number;

  constructor(
    private tweetsService: TweetsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route
      .paramMap
      .subscribe((params: ParamMap) => {
        this._refreshFrequency = params.get('refresh') ? +params.get('refresh') : 10000;
        this._getTweets();
      });
  }

  ngOnDestroy(): void {
    clearTimeout(this._timer);
  }

  private _getTweets(): void {
    this.tweetsService
      .getTweets()
      .subscribe(tweets => this.tweets = tweets);

    this._timer = setTimeout(() => this._getTweets(), this._refreshFrequency);
  }

}
