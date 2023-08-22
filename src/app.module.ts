import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { PostsModule } from './posts/posts.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [UserModule, PostsModule, StoreModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
