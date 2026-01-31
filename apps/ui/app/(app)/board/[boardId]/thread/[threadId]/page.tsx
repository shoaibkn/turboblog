import { Post } from "@/components/post";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { boards, postReplies, threads, users } from "@/constants";

// Mock thread data
const threadData: Record<string, { title: string; content: string }> = {
  "1": {
    title: "What are your thoughts on the latest releases?",
    content:
      "I've been following the recent developments and wanted to get everyone's opinion. There's been a lot of interesting discussion around this topic lately, and I think it's worth exploring different perspectives.\n\nWhat do you all think about this?",
  },
  "2": {
    title: "Beginner's guide - Where should I start?",
    content:
      "I'm completely new to this and feeling a bit overwhelmed. Can anyone recommend good resources or share their experience getting started? Any help would be greatly appreciated!",
  },
  "3": {
    title: "Discussion: Best practices and tips",
    content:
      "Let's compile a list of best practices for everyone. I'll start with a few that have worked well for me over the years:\n\n1. Always do your research first\n2. Don't be afraid to ask questions\n3. Learn from your mistakes\n\nWhat would you add to this list?",
  },
};

// Mock replies
const generateReplies = (threadId: string) => [
  {
    id: "r1",
    author: "Anonymous",
    content:
      "Great question! I've been thinking about this a lot lately. From my experience, I would say...",
    createdAt: "1h ago",
    postNumber: 2,
  },
  {
    id: "r2",
    author: "Anonymous",
    content:
      "I disagree with some of the points mentioned above. Here's my perspective on why that might not always work...",
    createdAt: "1h ago",
    postNumber: 3,
  },
  {
    id: "r3",
    author: "Anonymous",
    content:
      ">>2\nThat's a really good point! I never thought about it that way before.",
    createdAt: "55m ago",
    postNumber: 4,
  },
  {
    id: "r4",
    author: "Anonymous",
    content:
      "Does anyone have recommendations for resources? I'm interested in learning more about this topic.",
    createdAt: "45m ago",
    postNumber: 5,
  },
  {
    id: "r5",
    author: "Anonymous",
    content:
      ">>4\nCheck out these links:\n- Resource 1\n- Resource 2\n- Resource 3\n\nThey helped me a lot when I was starting out.",
    createdAt: "40m ago",
    postNumber: 6,
  },
  {
    id: "r6",
    author: "Anonymous",
    content:
      "This is exactly what I needed to see today. Thanks for starting this discussion!",
    createdAt: "35m ago",
    postNumber: 7,
  },
  {
    id: "r7",
    author: "Anonymous",
    content:
      "I have a related question: has anyone tried the alternative approach? How did it work out?",
    createdAt: "30m ago",
    postNumber: 8,
  },
  {
    id: "r8",
    author: "Anonymous",
    content:
      ">>7\nYes, I tried it last month. The results were pretty interesting, though not exactly what I expected. Here's what happened...",
    createdAt: "25m ago",
    postNumber: 9,
  },
];

export default async function ThreadPage({
  params,
}: {
  params: Promise<{ boardId: string; threadId: string }>;
}) {
  const { boardId, threadId } = await params;
  console.log(threadId);
  const thread = threads.find((thread) => thread.id === threadId) || {
    id: "",
    title: "",
    content: "",
    authorType: "",
    authorId: null,
    authorIp: "",
    image: "",
    boardId: "",
    userId: null,
    createdAt: "",
  };
  const replies = postReplies.filter((reply) => reply.postId === threadId);

  console.log("Inside thread");

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href={`/board/${boardId}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to /{boards.find((board) => board.id === boardId)?.slug}/
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-balance">{thread.title}</h1>
        </div>

        <div className="space-y-4 mb-8">
          <Post
            id="op"
            image={thread.image}
            author={
              users.find((user) => user.id === thread.authorId)?.username || ""
            }
            content={thread.content}
            createdAt={thread.createdAt}
            postNumber={thread.id}
            replyCount={replies.length}
            isOriginalPost={true}
          />
          <span className="mb-6">Replies</span>
          {replies.map((reply) => (
            <Post
              key={reply.id}
              id={reply.id}
              author={
                users.find((user) => user.id === reply.authorId)?.username || ""
              }
              content={reply.content}
              createdAt={reply.createdAt}
              postNumber={reply.id}
              isOriginalPost={false}
            />
          ))}
        </div>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Post a Reply</h3>
            <form className="space-y-4">
              <Textarea
                placeholder="Write your reply..."
                className="min-h-32 resize-none"
              />
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button type="submit">Post Reply</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
