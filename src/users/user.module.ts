import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { StoreModule } from 'src/store/store.module';

@Module({
    imports: [StoreModule.register({
        dirname: 'store',
        filename: "user.json"
    })],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
