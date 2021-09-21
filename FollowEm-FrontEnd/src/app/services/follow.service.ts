import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Follow } from '../models/follow.model';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  private BASEURL = 'http://localhost:8080/'
  private ENDPOINTS = {
    GET_FOLLOW: 'follows',
    ADD_FOLLOW: 'follows/add',
    DELETE_FOLLOW: 'follows/delete',
    APPROVE_FOLLOW: 'follows/approve',
    DECLINE_FOLLOW: 'follows/decline',
    GET_MY_FOLLOWS: 'follows/myfollows',
    GET_MY_FOLLOWERS: 'follows/myfollowers'
  }

  constructor(private http: HttpClient) { }

  getFollows(): Observable<Follow[]>{
    return this.http.get<Follow[]>(
      `${this.BASEURL + this.ENDPOINTS.GET_FOLLOW}`
    )
  }

  createFollow(data: any){
    fetch('http://localhost:8080/follows/add', {
     method: 'post',
     headers: {
       "Content-type": "application/json"
     },
     body: JSON.stringify(data)
   })
   .then(res => res.json())
   .then(x => {
     console.log(`GOT RESPONSE ${JSON.stringify(x)}`)
    
   })
   .catch(err => {
     console.log(err)
   })
  }

  deleteFollow(id: any): Observable<Follow>{
    return this.http.delete<Follow>(
      `${this.BASEURL + this.ENDPOINTS.DELETE_FOLLOW}/${id}`
    )
  }

  approveFollow(data: Follow): Observable<Follow>{
    return this.http.put<Follow>(
      `${this.BASEURL + this.ENDPOINTS.APPROVE_FOLLOW}/${data.id}`, data
    )
  }

  declineFollow(data: Follow): Observable<Follow>{
    return this.http.put<Follow>(
      `${this.BASEURL + this.ENDPOINTS.DECLINE_FOLLOW}/${data.id}`, data
    )
  }

  getMyFollows(id: any): any{
    fetch(`http://localhost:8080/follows/myfollows/${id}`)
    .then(res => res.json())
    .then(ret => {
      console.log(`RET: ${JSON.stringify(ret)}`);
      return ret;
    })
    .catch(err => {
      console.log(err);
    })
  }

  getMyFollowers(id: any): Observable<number[]>{
    return this.http.get<number[]>(
      `${this.BASEURL + this.ENDPOINTS.GET_MY_FOLLOWERS}/${id}`
    )
  }
}