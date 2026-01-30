import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Post} from '../../post/entities/post.entity';
import {User} from '../../user/entities/user.entity';

@ObjectType()
export class Comments {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;
  //
  @Field()
  id: string;

  @Field()
  content: string;

  @Field(() => String)
  authorType: string;

  @Field({nullable: true})
  authorId: string;

  @Field({nullable: true})
  authorIp: string;

  @Field(() => Date)
  createdAt: Date;

  @Field()
  postId: string;

  @Field(() => Post)
  post: Post

  @Field({nullable: true})
  userId?: string

  @Field(() => [User], {nullable: true})
  user?: User

  @Field({nullable: true})
  parentId: string;


  @Field(() => Comments, {nullable: true})
  parent?: Comments


  @Field(() => [Comments],{nullable: true})
  replies?: Comments[]

}



// id         String     @id @default(cuid())
// content    String
// authorType AuthorType
// authorId   String?
// authorIp   String?
// createdAt  DateTime   @default(now())
// postId     String
// post       Post       @relation(fields: [postId], references: [id], onDelete: Cascade)
// userId     String?
// user       User?      @relation(fields: [userId], references: [id], onDelete: SetNull)
// parentId   String?
// parent     Comment?   @relation("Replies", fields: [parentId], references: [id], onDelete: Cascade)
// replies    Comment[]  @relation("Replies")
