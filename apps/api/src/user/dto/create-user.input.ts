import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
@InputType()
export class CreateUserInput {

  @Field()
  username: string;

  @Field()
  passwordHash: string;

  @Field()
  @IsEmail()
  email: string;

  

}
