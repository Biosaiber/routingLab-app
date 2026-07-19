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
        },
        {
          id: 2,
          author: 'Laura',
          userId: 2,
          content:
            "The European Union should continue investing in AI-driven defence systems while maintaining strong ethical standards and international cooperation.",
          datePosted: new Date(2026, 6, 18),
        },
        {
          id: 3,
          author: 'Cecil',
          userId: 4,
          content:
            "Cybersecurity will become just as important as traditional military equipment. Protecting digital infrastructure is now a key part of national defence.",
          datePosted: new Date(2026, 6, 19),
        },
      ],
      userId: 1
    },
    {
      id: 2,
      title: 'Artificial Intelligence transforming European logistics',
      content: `Artificial intelligence is becoming a key driver of Europe's logistics sector. From warehouse automation to predictive supply chain management, AI is helping companies improve efficiency, reduce costs, and respond more quickly to market demands while supporting sustainable economic growth.`,
      dateCreated: new Date(2026, 6, 20),
      snippet: 'AI-powered logistics could redefine the future of European supply chains.',
      tags: ['AI', 'logistics', 'innovation'],
      comments: [
        {
          id: 1,
          author: 'James',
          userId: 1,
          content: `Companies that successfully integrate AI into their logistics operations will gain a significant competitive advantage over the coming decade.`,
          datePosted: new Date(2026, 6, 21),
        },
        {
          id: 2,
          author: 'Terry',
          userId: 3,
          content: `Automation should support workers rather than replace them. Training employees alongside new technologies will be essential.`,
          datePosted: new Date(2026, 6, 22),
        },
        {
          id: 3,
          author: 'Laura',
          userId: 2,
          content: `The biggest challenge will be sharing data securely between companies while protecting customer privacy.`,
          datePosted: new Date(2026, 6, 23),
        },
      ],
      userId: 2,
    },
    {
      id: 3,
      title: 'Green energy investments reshape European industry',
      content: `Across Europe, governments and private companies are accelerating investments in renewable energy, battery technology, and smart electrical grids. These initiatives aim to reduce dependence on fossil fuels while strengthening Europe's industrial competitiveness and long-term energy security.`,
      dateCreated: new Date(2026, 6, 24),
      snippet: 'Renewable energy is becoming one of Europe’s strongest economic priorities.',
      tags: ['energy', 'green', 'Europe'],
      comments: [
        {
          id: 1,
          author: 'Cecil',
          userId: 4,
          content: `Energy independence is just as important as technological innovation. Europe must continue diversifying its energy sources.`,
          datePosted: new Date(2026, 6, 25),
        },
        {
          id: 2,
          author: 'James',
          userId: 1,
          content: `Battery storage technologies will determine how successful renewable energy projects become over the next decade.`,
          datePosted: new Date(2026, 6, 26),
        },
        {
          id: 3,
          author: 'Laura',
          userId: 2,
          content: `Sustainability and economic growth can go hand in hand if investments are planned carefully and supported by innovation.`,
          datePosted: new Date(2026, 6, 27),
        },
      ],
      userId: 3,
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
  private defaultUser: User = {
    id: 0,
    username: 'Unknown',
    bio: 'No biography available.'
  }
  getPosts(): BlogPost[] {
    return [...this.blogPosts];
  }
  getPostById(id: number): BlogPost {
    return this.blogPosts.find(post => post.id === id) || this.defaultBlogPost;
  }
  getUserById(id: number): User {
    return this.users.find(user => user.id === id) || this.defaultUser;
  }
  getPostsByUserId(userId: number): BlogPost[] {
    return this.blogPosts.filter(post => post.userId === userId);
  }
}
