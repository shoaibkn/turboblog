import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { Comments } from './entities/comment.entity';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';

@Resolver(() => Comments)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  // @Mutation(() => Comments)
  // createComment(@Args('createCommentInput') createCommentInput: CreateCommentInput) {
  //   return this.commentService.create(createCommentInput);
  // }

  @Query(() => [Comments], { name: 'comment' })
  findAll() {
    return this.commentService.findAll();
  }

  // @Query(() => Comments, { name: 'comment' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.commentService.findOne(id);
  // }

  // @Mutation(() => Comments)
  // updateComment(@Args('updateCommentInput') updateCommentInput: UpdateCommentInput) {
  //   return this.commentService.update(updateCommentInput.id, updateCommentInput);
  // }

  // @Mutation(() => Comments)
  // removeComment(@Args('id', { type: () => Int }) id: number) {
  //   return this.commentService.remove(id);
  // }
}
