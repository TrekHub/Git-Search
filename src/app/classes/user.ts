export class User {

    username: string;
    bio: string;
    avatar: string;
    followers: number;
    following: number;
    totalStars: number;
    publicRepos: number


    constructor(username: string, bio: string, avatar:string, followers: number, following: number, totalStars: number, publicRepos: number){
        
        this.username = username
        this.bio = bio
        this.avatar = avatar
        this.followers = followers
        this.following = following
        this.totalStars = totalStars
        this.publicRepos = publicRepos
    }

}
