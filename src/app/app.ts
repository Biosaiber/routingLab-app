import { Component, signal, inject } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { BlogService } from './blog.service';
import { BlogPost } from './blog-post.interface';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('routingLab-app');
  private location = inject(Location);
  private blogService = inject(BlogService);
  private router = inject(Router);
  goBack() {
    this.location.back();
  }
  goForward() {
    this.location.forward();
  }
  goRandomPost() {
    const posts = this.blogService.getPosts();
    const randomIndex = Math.floor(Math.random() * posts.length);
    const randomPost = posts[randomIndex];

    this.router.navigate(['/post', randomPost.id]);
  }

}
