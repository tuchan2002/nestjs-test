import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(@Inject("USER_SERVICE_1") private readonly userService: UserService) {}

    @Post()
    createUser(@Body() user: UserDto): UserDto {
        return this.userService.createUser(user);
    }

    @Get(':id')
    getUserById(@Param('id') id: number) {
        return `test ${id}`
    }
}
