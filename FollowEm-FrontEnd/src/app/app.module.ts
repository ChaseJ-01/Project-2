import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FollowListComponent } from './components/follow-list/follow-list.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { PostService } from './services/post.service';
import { UsersListComponent } from './components/users-list/users-list.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { UsersPostsComponent } from './components/users-posts/users-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    FollowListComponent,
    LoginComponent,
    NavbarComponent,
    PostFormComponent,
    PostsComponent,
    ProfileComponent,
    SignupComponent,
    UsersListComponent,
    SinglePostComponent,
    UsersPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
