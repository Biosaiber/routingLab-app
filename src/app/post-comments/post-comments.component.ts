import { Component, inject, Input, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post.interface';
import { BlogService } from '../blog.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-comments',
  imports: [RouterLink],
  templateUrl: './post-comments.component.html',
  styleUrl: './post-comments.component.css',
})
export class PostCommentsComponent implements OnInit {
  @Input() id: number = 0;
  private blogService = inject(BlogService);
  post!: BlogPost;
  ngOnInit(): void {
    const postId = Number(this.id);
    this.post = this.blogService.getPostById(postId);
  }

}
