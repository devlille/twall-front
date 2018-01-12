import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Tweet} from '../model/tweet';

@Injectable()
export class TweetsService {

  constructor(private httpClient: HttpClient) {
  }

  public getTweets(): Observable<Array<Tweet>> {
    return this.httpClient.get<Array<Tweet>>('http://localhost:3002/api/tweet');
  }

}
