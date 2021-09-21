import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from "../../models/user.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userModel = new User(0,'','','','');
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit(){    
    console.log(`USER DATA: ${this.userModel}`)
     this.userService.createUser(this.userModel);
    }
  }

