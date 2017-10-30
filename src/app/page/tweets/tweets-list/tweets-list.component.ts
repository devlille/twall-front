import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { trigger, transition, style, animate } from '@angular/animations';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Tweet } from './../../../shared/model/tweet';
import { TweetsService } from './../../../shared/service/tweets.service';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css']
})
export class TweetsListComponent implements OnInit, OnDestroy {

  public tweets: Array<Tweet>;
  private _timer: NodeJS.Timer;
  private _refreshFrequency: number;

  constructor(
    private tweetsService: TweetsService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route
      .paramMap
      .subscribe((params: ParamMap) => {
        const param = +params.get('refresh');
        this._refreshFrequency = param && param > 5000 ? +params.get('refresh') : 5000;
        this._getTweets();
      });
  }

  ngOnDestroy(): void {
    clearTimeout(this._timer);
  }

  private _getTweets(): void {
    this.tweetsService
      .getTweets()
      .subscribe(
        tweets => this.tweets = tweets,
        err => this._handleErr()
      );

    this._timer = setTimeout(() => this._getTweets(), this._refreshFrequency);
  }

  private _handleErr(): void {
    this.snackBar.open(
      'Erreur lors de la récupération des tweets !!',
      null,
      {
        duration: 3000
      });
  }

}
