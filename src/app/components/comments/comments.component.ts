import {Component, Input, OnInit} from '@angular/core';
import {Comments} from '../../models/Comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  comments: Comments;
  constructor() { }

  ngOnInit(): void {
  }

}
