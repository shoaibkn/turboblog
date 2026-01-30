import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardResolver } from './board.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [BoardResolver, BoardService, PrismaService],
})
export class BoardModule {}
