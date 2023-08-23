import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';
import { LoggerService } from 'src/logger/logger.service';

@Controller('users')
export class UserController {
    constructor(@Inject(UserService) private readonly userService: UserService, private readonly logger: LoggerService) {
    }

    @Post()
    createUser(@Body() user: UserDto): UserDto {
        return this.userService.createUser(user);
    }

    @Get('/test')
    testGet() {
        return this.logger.log()
    }

    @Post('/test')
    testPost() {
        return this.logger.log()
    }

    @Get(':id')
    getUserById(@Param('id') id: number) {
        return `test ${id}`
    }
}
