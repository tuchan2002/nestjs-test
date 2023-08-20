import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { plainToClass } from 'class-transformer';

@Controller('users')
export class UserController {
    @Post()
    createUser(@Body() user: UserDto): UserDto {
        user.id = 1;
        user.createdAt = new Date();
        user.updatedAt = new Date();
        
        return UserDto.plainToInstance(user)
    }

    @Get(':id')
    getUserById(@Param('id') id: number) {
        return `test ${id}`
    }
}
