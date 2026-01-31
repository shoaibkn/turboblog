import { ThreadCard } from "@/components/thread-card";
import { Button } from "@/components/ui/button";
import { boards, threads } from "@/constants";
import { Plus } from "lucide-react";
import Link from "next/link";

// Mock threads data
const generateThreads = (boardId: string) => [
  {
    id: "1",
    boardId,
    title: "What are your thoughts on the latest releases?",
    content:
      "I've been following the recent developments and wanted to get everyone's opinion. There's been a lot of interesting discussion around this topic lately.",
    author: "Anonymous",
    createdAt: "2h ago",
    replyCount: 24,
  },
  {
    id: "2",
    boardId,
    title: "Beginner's guide - Where should I start?",
    content:
      "I'm completely new to this and feeling a bit overwhelmed. Can anyone recommend good resources or share their experience getting started?",
    author: "Anonymous",
    createdAt: "5h ago",
    replyCount: 42,
  },
  {
    id: "3",
    boardId,
    title: "Discussion: Best practices and tips",
    content:
      "Let's compile a list of best practices for everyone. I'll start with a few that have worked well for me over the years.",
    author: "Anonymous",
    createdAt: "8h ago",
    replyCount: 18,
  },
  {
    id: "4",
    boardId,
    title: "Weekly recommendation thread",
    content:
      "Post your recommendations for the week! Whether it's something you discovered or want to share with others.",
    author: "Anonymous",
    createdAt: "12h ago",
    replyCount: 67,
  },
  {
    id: "5",
    boardId,
    title: "Help needed with a specific issue",
    content:
      "I've been stuck on this problem for days and can't figure it out. Has anyone encountered something similar?",
    author: "Anonymous",
    createdAt: "1d ago",
    replyCount: 31,
  },
  {
    id: "6",
    boardId,
    title: "What are you currently working on?",
    content:
      "Share your current projects, goals, or interests. I'm always curious to see what everyone is up to.",
    author: "Anonymous",
    createdAt: "1d ago",
    replyCount: 55,
  },
  {
    id: "7",
    boardId,
    title: "Controversial opinion thread",
    content:
      "Time for some hot takes! What's your controversial opinion that goes against the mainstream?",
    author: "Anonymous",
    createdAt: "2d ago",
    replyCount: 89,
  },
  {
    id: "8",
    boardId,
    title: "Resource sharing megathread",
    content:
      "Let's build a comprehensive resource list. Post your favorite tools, websites, books, or anything useful.",
    author: "Anonymous",
    createdAt: "2d ago",
    replyCount: 103,
  },
];

export default async function BoardPage({
  params,
}: {
  params: Promise<{ boardId: string }>;
}) {
  const { boardId } = await params;
  const board = boards.find((board) => board.id === boardId) || {
    name: "Unknown Board",
    description: "Board not found",
    slug: "none",
  };
  // const threads = generateThreads(boardId);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-balance">
                /{board.slug.toLowerCase()}/ - {board.name}
              </h1>
              <p className="text-muted-foreground text-lg text-pretty">
                {board.description}
              </p>
            </div>
            <Button asChild>
              <Link href={`/board/${boardId}/new-thread`}>
                <Plus className="mr-2 h-4 w-4" />
                New Thread
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {threads.map((thread) => (
            <ThreadCard key={thread.id} {...thread} />
          ))}
        </div>
      </main>
    </div>
  );
}
