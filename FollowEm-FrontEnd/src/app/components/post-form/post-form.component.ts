import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { PostForm } from "src/app/models/postform.model";
import { Router } from "@angular/router";
import { Post } from "src/app/models/post.model";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  

  user_id: any = localStorage.getItem("id")

 public User = {
   id: parseInt(this.user_id),
   name: localStorage.getItem('name') || '',
   email: '',
   expertise: '',
   password: ''
 }
 postFormModel = new PostForm(0, parseInt(this.user_id), "", "",this.User); 
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    
  }
  onSubmit(): void {
    this.postService.createPost(this.postFormModel).subscribe(x => { console.log(x); this.router.navigate(['posts'])})
  }

}
