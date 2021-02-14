import { Module } from '@nestjs/common';
import { PostsController } from './posts-controller';
import { PostsService } from './posts-service';

@Module({
  controllers: [PostsController],
  providers: [{ useClass: PostsService, provide: 'POSTS_SERVICE' }],
  exports: [],
})
export class PostsModule {}
