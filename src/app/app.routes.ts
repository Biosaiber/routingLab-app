import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'post/:id',
    component: PostComponent,
    children: [
      {
        path: 'comments',
        component: PostCommentsComponent
      }
    ]
  }
];
