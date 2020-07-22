import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import {PostService} from './services/post/post.service';
import {RouterModule} from '@angular/router';
import { AllUserComponent } from './components/all-user/all-user.component';
import { AllPostComponent } from './components/all-post/all-post.component';
import { AllCommentComponent } from './components/all-comment/all-comment.component';
import { SingleUserComponent } from './components/single-user/single-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostsComponent,
    CommentsComponent,
    AllUserComponent,
    AllPostComponent,
    AllCommentComponent,
    SingleUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUserComponent, children: [{path: ':id', component: SingleUserComponent}]}
      // {path: 'showAllUsers', component: AllUserComponent},
      // {path: 'showAllPosts', component: AllPostComponent},

      // {path: 'showAllComments', component: AllCommentComponent}
      ])
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
