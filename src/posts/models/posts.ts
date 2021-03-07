export interface BlogPostSummary {
  id: string;
  title: string;
  img: string;
  paragraph: string;
  techs: string[];
  createdAt: string;
}

export interface BlogPostDetail {
  id: string;
  title: string;
  img: string;
  paragraph: string;
  techs: string[];
  createdAt: string;
  contents: Content[];
}

interface Content {
  tag: string;
  data?: string;
  img?: string;
}

export interface IPostsService {
  getPostsSummaries(): BlogPostSummary[];

  updatePost(post: BlogPostSummary): void;

  createPost(post: BlogPostSummary): void;

  deletePost(postId: string): void;

  getPostDetail(postId: string): BlogPostDetail;
}
