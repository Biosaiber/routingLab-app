import { Component, signal, inject } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';

//temporarty
import { BlogService } from './blog.service';


@Component({
  selector: 'app-root',
  imports: [HomeComponent, RouterOutlet],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('routingLab-app');
  private blogService = inject(BlogService)
  constructor() {
    console.log(this.blogService.getPosts());
    console.log(this.blogService.getPostById(1));
    console.log(this.blogService.getUserById(1));
    console.log(this.blogService.getPostsByUserId(1))
  }
}
