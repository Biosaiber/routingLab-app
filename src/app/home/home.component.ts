import { Component, inject } from '@angular/core';
import { BlogPost } from '../blog-post.interface';
import { BlogService } from '../blog.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private blogService = inject(BlogService);
  posts: BlogPost[] = this.blogService.getPosts();
  authorName!: String;

  getAuthorName(userId: number): string {
    return this.blogService.getUserById(userId).username;
  }
}
