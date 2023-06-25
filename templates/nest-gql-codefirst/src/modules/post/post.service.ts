import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { type Post } from "prisma";

@Injectable()
class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPosts(): Promise<Post[]> {
    return await this.prisma.post.findMany();
  }
}

export default PostService;
