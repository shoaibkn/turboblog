import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
@InputType()
export class SignInInput {
  @Field({ nullable: true })
  username?: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  @IsEmail()
  email?: string;
}
