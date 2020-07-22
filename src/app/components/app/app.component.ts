import {Component, Input} from '@angular/core';
import {Post} from '../../models/Post';
import {User} from '../../models/User';
import {Comments} from '../../models/Comments';
import {PostService} from '../../services/post/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input()
  users: User[];
  constructor(private router: Router) {
  }

  showAllUsers(): void{
    this.router.navigate(['users']);
  }


}
