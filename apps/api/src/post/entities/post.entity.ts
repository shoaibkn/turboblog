import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => String)
  authorType: string;

  @Field({nullable: true})
  authorId?: string;

  @Field({nullable: true})
  authorIp?: string;

  @Field({nullable: true})
  image?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => String)
  boardId: string;

  @Field({nullable: true})
  userId?: string;
}
