import { Component, Input } from '@angular/core';
import { Comment } from '@angular/compiler';

@Component({
  selector: 'app-post-comments',
  imports: [],
  templateUrl: './post-comments.component.html',
  styleUrl: './post-comments.component.css',
})
export class PostCommentsComponent {
  @Input() id: number = 0;
  comment!: Comment;
}
