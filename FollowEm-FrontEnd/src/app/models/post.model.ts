import { User } from "./user.model";

//Stuck a user object in here to grab names and expertise for all posts
export class Post {
    constructor(
        public id: number,
        public author_id: number,
        public title: string,
        public content: string,
        public user: User,
    ){}
}
