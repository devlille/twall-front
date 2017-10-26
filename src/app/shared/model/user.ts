export class User {

    public name: string;
    public screenName: string;
    public url: string;
    public description: string;
    public verified: boolean;
    public profileImage: string;

    constructor(
        name: string,
        screenName: string,
        url: string,
        description: string,
        verified: boolean,
        profileImage: string) {
            this.name = name;
            this.screenName = screenName;
            this.url = url;
            this.description = description;
            this.verified = verified;
            this.profileImage = profileImage;
    }

}
