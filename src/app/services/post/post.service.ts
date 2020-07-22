import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/User';
import {Post} from '../../models/Post';
import {Comments} from '../../models/Comments';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {

  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
  }

  getCommentOfSinglePost(postId): Observable<Comments[]>{
    return this.http.get<Comments[]>(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }

  getSinglePostOfUser(userId): Observable<Post[]>{
    return this.http.get<Post[]>(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }
}
