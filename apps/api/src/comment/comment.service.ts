import { Injectable } from '@nestjs/common';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommentService {
     constructor(private prisma: PrismaService) {}
  // create(createCommentInput: CreateCommentInput) {
  //   return 'This action adds a new comment';
  // }

  findAll() {
    return this.prisma.comment.findMany();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} comment`;
  // }

  // update(id: number, updateCommentInput: UpdateCommentInput) {
  //   return `This action updates a #${id} comment`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} comment`;
  // }
}
