import { Expose, plainToClass } from "class-transformer";

export abstract class BaseDto {
    @Expose()
    id: number;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;

    static plainToInstance<T>(this: new (...args: any[]) => T, obj: T): T {
        console.log(this, typeof this, obj, typeof obj);
        
        return plainToClass(this, obj, {excludeExtraneousValues: true})
    }
}