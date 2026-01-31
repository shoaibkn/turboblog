import { BoardCard } from "@/components/board-card";
import { boards, threads } from "@/constants";

// Mock data for boards

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-balance">
            Welcome to Imageboard
          </h1>
          <p className="text-muted-foreground text-lg text-pretty">
            Join discussions across various boards and communities
          </p>
        </div>
        <div className="flex flex-row gap-4 flex-wrap">
          {boards.map((board) => (
            <BoardCard
              key={board.id}
              id={board.id}
              name={board.name}
              slug={board.slug}
              description={board.description}
              category={board.category}
              threadCount={
                threads.filter((thread) => thread.boardId === board.id).length
              }
              postCount={
                threads.filter((thread) => thread.boardId === board.id).length
              }
            />
          ))}
          {/* postCount={threads.filter((thread) => thread.boardId === board.id).length()}))} */}
        </div>
      </main>
    </div>
  );
}
