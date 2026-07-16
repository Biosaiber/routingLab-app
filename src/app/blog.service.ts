import { Injectable } from '@angular/core';
import { BlogPost, User } from './blog-post.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  private users: User[] = [
    {
      id: 1,
      username: 'James',
      bio: 'Tech enthusiast and gadget reviewer.'
    },
    {
      id: 2,
      username: 'Laura',
      bio: 'Coffee lover and tech enthusiast.'
    },
    {
      id: 3,
      username: 'Terry',
      bio: 'Travel addict and food explorer.'
    },
    {
      id: 4,
      username: 'Cecil',
      bio: 'Passionate about coding and gaming.'
    }
  ];
  private blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'HighTech European defence industry revolution',
      content: `Europe's defence industry is rapidly evolving through advanced technologies such as AI, autonomous drones, cybersecurity, and next-generation military systems. These innovations are reshaping the future of European security and cooperation.`,
      dateCreated: new Date(2026, 6, 15),
      snippet: "How Ukraine's experience could reshape Europe's future defence strategy.",
      tags: ['EU', 'technology', 'defence'],
      comments: [
        {
          id: 1,
          author: 'Danzel',
          userId: 1,
          content: `Ukraine's battlefield experience, advanced drone capabilities, and resilient defence industry could significantly strengthen Europe's collective security and military readiness in the years ahead.`,
          datePosted: new Date(2026, 6, 17),

        }
      ],
      userId: 1
    }
  ];
  private defaultBlogPost: BlogPost = {
    id: 0,
    title: 'Post Not Found',
    content: 'The requested blog post could not be found.',
    dateCreated: new Date(),
    snippet: 'No details available.',
    tags: [],
    comments: [],
    userId: 0
  };
  getPosts(): BlogPost[] {
    return [...this.blogPosts];
  }
  getBlogPostById(id: number): BlogPost {
    return this.blogPosts.find(post => post.id === id) || this.defaultBlogPost;
  }
}
