import { User } from './user';

export class Tweet {

    public text: string;
    public user: User;
    public createdAt: Date;
    public replyCount: number;
    public retweetCount: number;
    public favoriteCount: number;

    constructor(
        text: string,
        user: User,
        createdAt: Date,
        replyCount: number,
        retweetCount: number,
        favoriteCount: number) {
            this.text = text;
            this.user = user;
            this.createdAt = createdAt;
            this.replyCount = replyCount;
            this.retweetCount = retweetCount;
            this.favoriteCount = favoriteCount;
    }

}
