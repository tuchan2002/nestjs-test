import { Inject, Injectable } from "@nestjs/common";
import { StoreService } from "src/store/store.service";

@Injectable()
export class PostsService {
    constructor(private readonly storeService: StoreService) {
    }

    createPost(post: any): void {
        this.storeService.save(post);
    }
}