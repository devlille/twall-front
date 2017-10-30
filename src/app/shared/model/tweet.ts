import { User } from './user';

export class Tweet {

    public id: number;
    public text: string;
    public user: User;
    public createdAt: Date;
    public retweetCount: number;
    public favoriteCount: number;

    constructor(
        id: number,
        text: string,
        user: User,
        createdAt: Date,
        retweetCount: number,
        favoriteCount: number) {
            this.id = id;
            this.text = text;
            this.user = user;
            this.createdAt = createdAt;
            this.retweetCount = retweetCount;
            this.favoriteCount = favoriteCount;
    }

}
