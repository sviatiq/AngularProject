import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input()
  posts: Post;
  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
  }

  showAllComments(postId: number): void{
    console.log(postId);
    this.postService.getCommentOfSinglePost(postId).subscribe(response => console.log(response));
  }


}
