import { Component } from '@angular/core';
import {Post} from '../../models/Post';
import {User} from '../../models/User';
import {Comments} from '../../models/Comments';
import {PostService} from '../../services/post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[];
  posts: Post[];
  comments: Comments[];

  constructor(private postService: PostService){
    this.postService.getUsers().subscribe(response => this.users = response);
    this.postService.getPosts().subscribe(response => this.posts = response);
    this.postService.getComments().subscribe(response => this.comments = response);
  }


}
