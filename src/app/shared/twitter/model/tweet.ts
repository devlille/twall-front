import {User} from './user';

export class Tweet {

  constructor(public id?: number,
              public text?: string,
              public user?: User,
              public createdAt?: Date,
              public retweetCount?: number,
              public favoriteCount?: number) {
  }

}
