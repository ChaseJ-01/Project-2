import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FollowService } from 'src/app/services/follow.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.css']
})
export class UsersPostsComponent implements OnInit {

  public singleId = 0 //localStorage.getItem('sid');
  public sp: any[] = [];
  public user: any
  
  public rt = localStorage.getItem('posts');
  public s = JSON.parse(localStorage.getItem('posts')!);
    constructor(private postService: PostService, private userService: UserService, private route: ActivatedRoute, private followService: FollowService) { 
    }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.singleId = params.poster_id
      console.log(params.poster_id)
      this.postService.getPostsByAuthor2(this.singleId).subscribe(data => {
        this.sp = data
        this.userService.getUserById(this.singleId).subscribe(userData => {
          this.user = userData
          for(let i=0; i<this.sp.length; i++){
            this.sp[i].user = this.user
          }
        })
        console.log(this.user)
        console.log(this.sp)
      })
    })
  }

  getSinglePost():any {
  }

  submitFollow(d: any) {
    console.log(`DATA: ${d}`);
    console.log(localStorage.getItem('id'));
    const o = {
      followed_id: d,
      following_id: localStorage.getItem('id')
    }
    this.followService.createFollow(o);
  }
}
