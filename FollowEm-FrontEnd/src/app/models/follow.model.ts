export class Follow {
    constructor(
        public id: number,
        public followed_id: number,
        public  following_id: number,
        public status: string
    ) {

    }
 
}