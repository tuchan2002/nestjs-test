import { Injectable, Scope } from '@nestjs/common';

@Injectable({
    scope: Scope.DEFAULT
})
export class LoggerService {
    private count = 0;
    log(): number {
        this.count++;
        return this.count;
    }
}
