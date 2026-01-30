import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Post} from '../../post/entities/post.entity';

@ObjectType()
export class User {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;
  //
  //
  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field({nullable: true})
  passwordHash? : string;


  @Field(() => Boolean)
  isAdmin:boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => [Post], {nullable: true})
  posts?: Post[];


}


// id           String    @id @default(cuid())
// username     String    @unique
// email        String    @unique
// passwordHash String?
// isAdmin      Boolean   @default(false)
// createdAt    DateTime  @default(now())
// posts        Post[]
// comments     Comment[]
