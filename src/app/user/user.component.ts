import { Component, inject, Input, OnInit } from '@angular/core';
import { BlogPost, User } from '../blog-post.interface';
import { BlogService } from '../blog.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  @Input() id: number = 0;
  private blogService = inject(BlogService);
  user!: User;
  userPosts!: BlogPost[];
  ngOnInit() {
    const userId = Number(this.id);
    this.user = this.blogService.getUserById(userId);
    this.userPosts = this.blogService.getPostsByUserId(userId);
  }
}
