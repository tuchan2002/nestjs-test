import { Expose, Transform } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";
import { BaseDto } from "src/common/base.dto";

export class UserDto extends BaseDto {
    @IsNotEmpty()
    @Expose()
    username: string;

    firstName: string;

    lastName: string;

    @Expose()
    @Transform(({obj}) => obj.firstName + ' ' + obj.lastName)
    fullName: string;

    @IsNotEmpty()
    @Length(6, 20)
    @Expose()
    password: string;
}