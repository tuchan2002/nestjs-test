import { Module } from '@nestjs/common';
import { StoreModule } from 'src/store/store.module';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
    imports: [StoreModule.register({
        dirname: 'store',
        filename: "posts.json"
    })],
    controllers: [PostsController],
    providers: [PostsService]
})
export class PostsModule {}
