import { User } from "./user.model";


export class PostForm {
    constructor(   
    public id: number,
    public author_id: number, 
       public title: string,
       public content: string,
       public user: User
    ) {}
    }
    