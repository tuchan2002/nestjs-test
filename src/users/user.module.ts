import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    controllers: [UserController],
    providers: [{
        provide: "USER_SERVICE_1",
        useClass: UserService
    }]
})
export class UserModule {}
