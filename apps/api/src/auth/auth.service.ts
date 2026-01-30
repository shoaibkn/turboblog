import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInInput } from './dto/signin.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { AuthJwtPayload } from './types/auth-jwtPayload';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateLocalUser({ email, username, password }: SignInInput) {
    if (!email && !username) {
      throw new Error('Email or username is required');
    }
    const user = await this.prisma.user.findUnique({
      where: {
        email: email || undefined,
        username: username || undefined,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await verify(user.passwordHash, password);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    //Generate a JWT token and return to client

    return user;
  }

  async generateToken(user: User) {
    const payload: AuthJwtPayload = { sub: user.id };
    const accessToken = await this.jwtService.signAsync(payload);
    return accessToken;
  }

  async login(user: User) {
    const accessToken = await this.generateToken(user);
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      accessToken,
    };
  }

  async validateJwtUser(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw new UnauthorizedException('User not found');
    const currentUser = { id: user.id };
    return currentUser;
  }
}
