import {Component, OnInit, Input} from '@angular/core';
import {User} from '../../models/User';
import {PostsComponent} from '../posts/posts.component';
import {PostService} from '../../services/post/post.service';
import {CommentService} from '../../services/comment/comment.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  users: User;

  constructor(private postService: PostService, private commentService: CommentService) {
  }

  ngOnInit(): void {
  }

  showAllPosts(userId: number): void {
    console.log(userId);
    this.postService.getSinglePostOfUser(userId).subscribe(posts => {
    console.log(posts);
    for(const post of posts) {
      this.commentService.getCommentOfSinglePostOfCurrentUser(post.id).subscribe(comment => console.log(comment));
    }
  })
  }
}
