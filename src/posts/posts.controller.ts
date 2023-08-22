import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(@Inject(PostsService) private readonly postService: PostsService) {
    }

    @Post()
    createPost(@Body() post: any) {
        return this.postService.createPost(post)
    }
}
