import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from '../prisma/prisma.service';
import { hash } from "argon2";

@Injectable()
export class UserService {
   constructor(private prisma: PrismaService) {}
  async create(createUserInput: CreateUserInput) {
    const {username, passwordHash, email} = createUserInput;
    const hashedPassword = await hash(passwordHash);
    return await this.prisma.user.create({
      data: {
        username, email, passwordHash: hashedPassword
      }
    })
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
