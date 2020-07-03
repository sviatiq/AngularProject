import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/Post';
import {User} from '../../models/User';
import {Comments} from '../../models/Comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[];
  posts: Post[];
  comments: Comments[];

constructor(private http: HttpClient){
  this.http.get<User[]>('http://jsonplaceholder.typicode.com/users')
    .subscribe(response => this.users = response);
  this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts')
    .subscribe(response => this.posts = response);
  this.http.get<Comments[]>('http://jsonplaceholder.typicode.com/comments')
    .subscribe(response => this.comments = response);
}

}
