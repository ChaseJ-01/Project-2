import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
public singleId = localStorage.getItem('sid');
public sp:any;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getSinglePost();
  }
getSinglePost():any {
  this.sp = this.postService.getPostsByAuthorId(this.singleId)
}
}
