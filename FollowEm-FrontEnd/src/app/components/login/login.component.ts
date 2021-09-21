import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel = new User(0, '', '','', '');
  error = localStorage.getItem('error') || '';
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit(): any {   
      let x = this.userService.userLogin(this.loginModel);
      console.log(x);
    }
  }
  
