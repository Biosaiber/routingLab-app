import { Component, inject, Input, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogPost } from '../blog-post.interface';
import { User } from '../blog-post.interface';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  private blogService = inject(BlogService);
  @Input() id: number = 0;
  post!: BlogPost;
  author!: User;
  ngOnInit(): void {
    const postId = Number(this.id);
    this.post = this.blogService.getPostById(postId);
    this.author = this.blogService.getUserById(this.post.userId);
  }

}
