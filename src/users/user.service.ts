import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { StoreService } from "src/store/store.service";
import { SecurityService } from "src/security/security.service";

@Injectable()
export class UserService {
    constructor(
        private readonly storeService: StoreService,
        @Inject(forwardRef(()=> SecurityService)) private readonly securityService: SecurityService
    ) {}

    createUser(user: any): any {
        user.id = 1;
        user.createdAt = new Date();
        user.updatedAt = new Date();
        
        this.storeService.save(user);
        return UserDto.plainToInstance(user);
    }
}