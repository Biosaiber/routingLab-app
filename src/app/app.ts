import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Location } from '@angular/common';


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
  goBack() {
    this.location.back();
  }
  goForward() {
    this.location.forward();
  }
}
