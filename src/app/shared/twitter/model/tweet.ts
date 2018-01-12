import {User} from './user';

export class Tweet {

  constructor(public id?: Number,
              public text?: String,
              public user?: User,
              public createdAt?: Date,
              public retweetCount?: Number,
              public favoriteCount?: Number) {
  }

}
