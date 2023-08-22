import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(@Inject(UserService) private readonly userService: UserService, @Inject("STORE_CONFIG") private readonly storeConfig) {
        console.log(storeConfig);
    }

    @Post()
    createUser(@Body() user: UserDto): UserDto {
        return this.userService.createUser(user);
    }

    @Get(':id')
    getUserById(@Param('id') id: number) {
        return `test ${id}`
    }
}
