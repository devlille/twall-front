import {animate, style, transition, trigger} from '@angular/animations';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Tweet} from '../../../shared/twitter/model/tweet';
import {TwitterService} from '../../../shared/twitter/service/twitter.service';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css'],
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
export class TweetsListComponent implements OnInit, OnDestroy {

  public tweets: Array<Tweet>;
  private _timer: NodeJS.Timer;
  private _refreshFrequency: number;

  constructor(private tweetsService: TwitterService,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        const param = +params.get('refresh');
        this._refreshFrequency = param && param > 5000 ? param : 5000;
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
      {duration: 3000});
  }

}
