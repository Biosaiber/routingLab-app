import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//temporarty
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('routingLab-app');
  private blogService = inject(BlogService)
  constructor() {
    console.log(this.blogService.getPosts());
    console.log(this.blogService.getBlogPostById(1));
    console.log(this.blogService.getUserById(1));
  }
}
