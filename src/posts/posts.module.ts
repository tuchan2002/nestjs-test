import { Module } from '@nestjs/common';
import { StoreModule } from 'src/store/store.module';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
    imports: [StoreModule.forFeature({
        filename: "posts.json"
    })],
    controllers: [PostsController],
    providers: [PostsService]
})
export class PostsModule {}
