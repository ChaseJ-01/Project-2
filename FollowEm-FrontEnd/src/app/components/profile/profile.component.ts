import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { FollowService } from 'src/app/services/follow.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
 public user_id = localStorage.getItem('id');
public name = localStorage.getItem('name')?.toUpperCase();
public post: any;
public fp: any;


  constructor(
    private userService: UserService, 
    private route: ActivatedRoute, 
    private followService: FollowService,
    private postService: PostService
    ) {
      this.postService.getPosts().subscribe((data) => {console.log(data); this.post = data}); 
      console.log(`THIS IS P: ${this.post}`)
     }

  ngOnInit(): void{
    this.getFollowList();        
  }
  getFilteredPosts() {
    let op = this.post.filter((x: { id: number; }) => x.id != 2);
    console.log(`OP: ${JSON.stringify(op)}`);
  }
  getFollowList() {
    this.fp = this.followService.getMyFollows(this.user_id);
    console.log(`FL: ${this.fp}`);
  }
  }


