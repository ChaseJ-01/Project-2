import { Component, OnInit } from '@angular/core';
import { FollowService } from 'src/app/services/follow.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public z: any;
  public error: any;
  constructor(private userService: UserService, private folowService: FollowService, private router: Router) {
    this.userService.getUsers().subscribe((data) => {console.log(data); this.z = data});
   }

  ngOnInit(): void {   
  }

  submitFollow(id:any) {
    console.log(id);
    localStorage.setItem("sid", id)
    return this.router.navigate(['users-posts/' + id])
  }
}
