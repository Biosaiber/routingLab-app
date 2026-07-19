import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { 
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'post/:id',
    component: PostComponent,
    children: [
      {
        path: 'comments',
        component: PostCommentsComponent
      }
    ]
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
