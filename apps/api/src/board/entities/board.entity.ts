import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Post} from '../../post/entities/post.entity';

@ObjectType()
export class Board {

  @Field()
  id: string;

  @Field()
  name: string;


  @Field()
  slug: string;

  @Field({nullable: true})
  description?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => [Post], {nullable: true})
  posts?: Post[];

}


// id          String   @id @default(cuid())
// name        String   @unique
// slug        String   @unique
// description String?
// createdAt   DateTime @default(now())
// posts       Post[]
