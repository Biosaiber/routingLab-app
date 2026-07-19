import { Component, inject, Input, OnInit } from '@angular/core';
import { User } from '../blog-post.interface';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  @Input() id: number = 0;
  private blogService = inject(BlogService);
  user!: User;
  ngOnInit() {
    const userId = Number(this.id);
    this.user = this.blogService.getUserById(userId);
  }
}
