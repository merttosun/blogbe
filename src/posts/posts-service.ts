import { Injectable } from '@nestjs/common';
import { BlogPostSummary, BlogPostDetail, IPostsService } from './models/posts';

@Injectable()
export class PostsService implements IPostsService {
  private postsDetails: BlogPostSummary[] = [
    {
      id: '123',
      title: 'post1 title lorem ipsum',
      paragraph: 'post paragraf post 3paragrafpost 3paragrafpost 3paragrafs',
      img: 'https://miro.medium.com/max/1400/1*9VUvg7TL4RjtMvu6qiP1_g.png',
      createdAt: '1 Mayıs 2021',
      techs: ['JavaScript', 'Css', 'Algorithm'],
    },
    {
      id: '345',
      title: 'post 2 title bi tık daha uzun title title bi tık daha uzun title',
      paragraph:
        'post paragrafpost 3paragrafpost 3paragraf post 3paragrafpost 3paragrafpost 3paragrafpost 3paragraf',
      img:
        'https://thumbs.dreamstime.com/z/big-data-database-app-software-source-code-big-data-database-app-software-source-code-desktop-pc-monitor-122458478.jpg',
      createdAt: '1 Mayıs 2021',
      techs: ['JavaScript', 'Css', 'Html', 'Algorithm'],
    },
    {
      id: '678',
      title:
        'post title2 post title 3asodjaosdjasodkaosdka post title post dititle bi tık daha uzun titletitle bi tık daha uzun titleasdkoasf',
      paragraph:
        'post 3paragrafpost 3paragrafpost 3paragrafpost 3paragraf post 3paragrafpost 3paragraf post 3paragrafpost 3paragraf post 3paragrafpost 3paragrafpost 3paragrafpost 3paragrafpost 3paragraf post 3paragrafpost 3paragraf post 3paragrafpost 3paragraf post 3paragrafpost 3paragrafpost 3paragrafpost 3paragrafpost 3paragraf post 3paragrafpost 3paragraf post 3paragrafpost 3paragraf post 3paragrafpost 3paragrafpost 3paragrafpost 3paragrafpost 3paragraf post 3paragrafpost 3paragraf post 3paragrafpost 3paragraf post 3paragraf',
      img:
        'https://cdn-images.welcometothejungle.com/5DDbrp9_kdlw05Z0hzc7kYEpaaruHhUUWJqs-nW1o8k/rs:auto:980::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9jYXRlZ29yeS9jb3Zlci8yNjYwLzE1NDg4My9jb2xsZWN0aW9uX2NhdGVnb3J5X2JlaGluZF90aGVfY29kZS5qcGc',
      createdAt: '1 Mayıs 2021',
      techs: ['JavaScript', 'Css', 'Html', 'Algorithm'],
    },
  ];

  private posts: BlogPostDetail[] = [
    {
      id: '123',
      title: 'post1 title lorem ipsum',
      paragraph: 'post paragraf post 3paragrafpost 3paragrafpost 3paragrafs',
      img: 'https://miro.medium.com/max/1400/1*9VUvg7TL4RjtMvu6qiP1_g.png',
      createdAt: '1 Mayıs 2021',
      techs: ['JavaScript', 'Css', 'Algorithm'],
      contents: [
        {
          tag: 'p',
          data: 'asdasdpaksdaksdasd',
          img: 'https://miro.medium.com/max/1400/1*9VUvg7TL4RjtMvu6qiP1_g.png',
        },
        {
          tag: 'p',
          data: 'asdasdpaksdaksdasd',
        },
      ],
    },
    {
      id: '345',
      title: 'post 2 title bi tık daha uzun title title bi tık daha uzun title',
      paragraph:
        'post paragrafpost 3paragrafpost 3paragraf post 3paragrafpost 3paragrafpost 3paragrafpost 3paragraf',
      img:
        'https://thumbs.dreamstime.com/z/big-data-database-app-software-source-code-big-data-database-app-software-source-code-desktop-pc-monitor-122458478.jpg',
      createdAt: '1 Mayıs 2021',
      techs: ['JavaScript', 'Css', 'Html', 'Algorithm'],
      contents: [
        {
          tag: 'p',
          data: 'asdasdpaksdaksdasd',
          img: 'https://miro.medium.com/max/1400/1*9VUvg7TL4RjtMvu6qiP1_g.png',
        },
        {
          tag: 'p',
          data: 'asdasdpaksdaksdasd',
        },
      ],
    },
    {
      id: '678',
      title:
        'post title2 post title 3asodjaosdjasodkaosdka post title post dititle bi tık daha uzun titletitle bi tık daha uzun titleasdkoasf',
      paragraph:
        'post 3paragrafpost 3paragrafpost 3paragrafpost 3paragraf post 3paragrafpost 3paragraf post 3paragrafpost 3paragraf post 3paragrafpost 3paragrafpost 3paragrafpost 3paragrafpost 3paragraf post 3paragrafpost 3paragraf post 3paragrafpost 3paragraf post 3paragrafpost 3paragrafpost 3paragrafpost 3paragrafpost 3paragraf post 3paragrafpost 3paragraf post 3paragrafpost 3paragraf post 3paragrafpost 3paragrafpost 3paragrafpost 3paragrafpost 3paragraf post 3paragrafpost 3paragraf post 3paragrafpost 3paragraf post 3paragraf',
      img:
        'https://cdn-images.welcometothejungle.com/5DDbrp9_kdlw05Z0hzc7kYEpaaruHhUUWJqs-nW1o8k/rs:auto:980::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9jYXRlZ29yeS9jb3Zlci8yNjYwLzE1NDg4My9jb2xsZWN0aW9uX2NhdGVnb3J5X2JlaGluZF90aGVfY29kZS5qcGc',
      createdAt: '1 Mayıs 2021',
      techs: ['JavaScript', 'Css', 'Html', 'Algorithm'],
      contents: [
        {
          tag: 'p',
          data: 'asdasdpaksdaksdasd',
          img: 'https://miro.medium.com/max/1400/1*9VUvg7TL4RjtMvu6qiP1_g.png',
        },
        {
          tag: 'p',
          data: 'asdasdpaksdaksdasd',
        },
      ],
    },
  ];

  createPost(post: BlogPostSummary) {
    this.postsDetails.push(post);
  }

  deletePost(postId: string) {
    const post = this.posts.find((p) => p.id === postId);
    const indexOfPost = this.posts.indexOf(post);
    this.postsDetails.splice(indexOfPost, 1);
  }

  updatePost(_post: BlogPostSummary) {
    const post = this.posts.find((p) => p.id === _post.id);
    const indexOfPost = this.posts.indexOf(post);
    this.postsDetails[indexOfPost] = _post;
  }

  getPostsSummaries(): BlogPostSummary[] {
    return this.postsDetails;
  }

  getPostDetail(postId: string): BlogPostDetail {
    const post = this.posts.find((post) => post.id === postId);
    console.log('getPostDetail', post);
    return post;
  }
}
