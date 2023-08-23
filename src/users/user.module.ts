import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { StoreModule } from 'src/store/store.module';
import { LoggerService } from 'src/logger/logger.service';
import { SecurityService } from 'src/security/security.service';

@Module({
    imports: [StoreModule.forFeature({
        filename: "user.json"
    })],
    controllers: [UserController],
    providers: [UserService, LoggerService, SecurityService]
})
export class UserModule {}
