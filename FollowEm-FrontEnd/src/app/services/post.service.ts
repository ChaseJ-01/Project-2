import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private BASEURL = 'http://localhost:8080/';
  private ENDPOINTS = {
    POSTS: "posts",
    POSTS_BY_USER: "posts/userposts",
    DELETE_POST: "posts/delete",
    UPDATE_POST: "posts/update",
    NEW_POST: "posts/add" 
  }

  constructor(private http: HttpClient, private router: Router) { }

  getPosts(): Observable<Post[]> { 
    return this.http.get<Post[]>('http://localhost:8080/posts');
  }

  getAllPosts():any {
    fetch('http://localhost:8080/posts') 
    .then(x => x.json())
    .then(y => {
      console.log(`THIS IS Y: ${y}`)
      return y
    })
    .catch(err => {
      console.log(err)
    })
  }
  getPostsByAuthorId(id: any): any {
    fetch(`http://localhost:8080/posts/userposts/${id}`)
    .then(res => res.json())
    .then(x => {
      // console.log(`X NEW: ${JSON.stringify(x)}`)
      // return x;
      localStorage.setItem('posts', JSON.stringify(x))
    })
    .catch(err => {
      console.log(err)
    })
  }

  getPostsByAuthor2(id: any): Observable<Post[]> {
    return this.http.get<Post[]>(
      `${this.BASEURL + this.ENDPOINTS.POSTS_BY_USER}/${id}`
    )
  }

  createPost(data: Post): Observable<Post> {
    return this.http.post<Post>(
      `${this.BASEURL + this.ENDPOINTS.NEW_POST}`, data
    )
  }

  deletePost(id: any): Observable<Post> {
    return this.http.delete<Post>(
      `${this.BASEURL + this.ENDPOINTS.DELETE_POST}/${id}`
    )
  }

  updatePost(id: any): Observable<Post> {
    return this.http.delete<Post>(
      `${this.BASEURL + this.ENDPOINTS.UPDATE_POST}/${id}`
    )
  }
}