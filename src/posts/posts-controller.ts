import {
  Controller,
  Get,
  Delete,
  Post,
  HttpCode,
  HttpStatus,
  Inject,
  Query,
  Body,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { BlogPostSummary, IPostsService } from './models/posts';

@Controller('posts')
export class PostsController {
  constructor(
    @Inject('POSTS_SERVICE') private readonly postsService: IPostsService,
  ) {}

  @Get('/getPostsSummaries')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get all posts with the page and limit',
  })
  @ApiQuery({
    name: 'page',
    description: 'Page',
    required: true,
    example: '1',
  })
  @ApiQuery({
    name: 'limit',
    description: 'limit',
    required: true,
    example: '30',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Ok' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Server Error',
  })
  findPostsSummaries(
    @Query('page') page = 0,
    @Query('pageSize') pageSize = 10,
    @Query('searchText') searchText,
  ): BlogPostSummary[] {
    console.log('findPostsSummaries');
    return this.postsService.getPostsSummaries();
  }

  @Delete('/delete')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Delete post with given id',
  })
  @ApiQuery({
    name: 'postId',
    description: 'post id',
    required: true,
    example: '123',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Ok' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Server Error',
  })
  deletePost(@Query('postId') postId) {
    this.postsService.deletePost(postId);
  }

  @Post('/update')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Update post',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Ok' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Server Error',
  })
  updatePost(@Body('post') post) {
    this.postsService.updatePost(post);
  }

  @Post('/create')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Update post',
  })
  @ApiQuery({
    name: 'post',
    description: 'post object',
    required: true,
    example: {
      title: 'string',
      content: [{ tag: 'a', data: 'string' }],
      tags: ['string'],
    },
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Ok' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Server Error',
  })
  createPost(@Body('post') post) {
    console.log('createPost', post);
    this.postsService.createPost(post);
  }

  @Get('/getPostDetail')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'get post detail with given id',
  })
  @ApiQuery({
    name: 'postId',
    description: 'post id',
    required: true,
    example: '123',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Ok' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Server Error',
  })
  getPostDetail(@Query('postId') postId) {
    console.log('post id', postId);
    return this.postsService.getPostDetail(postId);
  }
}
