import { Injectable } from '@nestjs/common';
import { BlogPost, IPostsService } from './models/posts';

@Injectable()
export class PostsService implements IPostsService {
  private posts: BlogPost[] = [
    {
      id: '123',
      title: 'h1',
      content: [
        { tag: 'h1', data: 'post title' },
        { tag: 'p', data: 'post paragraf' },
      ],
      tags: ['JavaScript', 'Css', 'Html', 'Algorithms'],
    },
    {
      id: '345',
      title: 'h1',
      content: [
        { tag: 'h1', data: 'post title' },
        { tag: 'p', data: 'post paragraf' },
      ],
      tags: ['JavaScript', 'Css', 'Html', 'Algorithm'],
    },
    {
      id: '567',
      title: 'h1',
      content: [
        { tag: 'h1', data: 'post title' },
        { tag: 'p', data: 'post paragraf' },
      ],
      tags: ['JavaScript', 'Css', 'Html', 'Algorithms'],
    },
  ];

  createPost(post: BlogPost) {
    this.posts.push(post);
  }

  deletePost(postId: string) {
    const post = this.posts.find((p) => p.id === postId);
    const indexOfPost = this.posts.indexOf(post);
    this.posts.splice(indexOfPost, 1);
  }

  updatePost(_post: BlogPost) {
    const post = this.posts.find((p) => p.id === _post.id);
    const indexOfPost = this.posts.indexOf(post);
    this.posts[indexOfPost] = _post;
  }

  getPosts(): BlogPost[] {
    return this.posts;
  }
}
