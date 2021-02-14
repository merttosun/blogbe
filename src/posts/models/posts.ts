export interface BlogPost {
  id: string;
  title: string;
  content: Content[];
  tags: string[];
}

interface Content {
  tag: string;
  data: string;
}

export interface IPostsService {
  getPosts(): BlogPost[];
  updatePost(post: BlogPost): void;
  createPost(post: BlogPost): void;
  deletePost(postId: string): void;
}
