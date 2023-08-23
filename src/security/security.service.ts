import { Inject, Injectable, Scope, forwardRef } from '@nestjs/common';
import { UserService } from 'src/users/user.service';

@Injectable({
    scope: Scope.DEFAULT
})
export class SecurityService {
    constructor(
        @Inject(forwardRef(()=> UserService)) private userService: UserService
    ){}
}
