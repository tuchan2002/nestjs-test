import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

interface StoreConfig {
    dir: string;
    path: string;
}
@Module({
    controllers: [UserController],
    providers: [UserService, {
        provide: "STORE_CONFIG",
        useValue: {
            dir: "/store",
            path: "tuchan001"
        } as StoreConfig
    }]
})
export class UserModule {}
