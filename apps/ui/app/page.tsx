import { BoardCard } from "@/components/board-card";

// Mock data for boards
const boards = [
  {
    id: "cmkz9go17000ag9u9avglwiel",
    name: "Politically Incorrect",
    description: "Cursim vilicus acceptus.",
    slug: "POL",
    category: "Polictics",
    threadCount: 123,
    postCount: 100,
    posts: null,
  },
  {
    id: "cmkz9go18000bg9u9zwxgd9vh",
    name: "Literature",
    description: "Voluptas angustus alias quod censura.",
    slug: "LIT",
    category: "Literature",
    threadCount: 123,
    postCount: 100,
    posts: null,
  },
  {
    id: "cmkz9go18000cg9u996mx1eoz",
    name: "Technology",
    description: "Contego acervus calculus.",
    slug: "TECH",
    category: "Science",
    threadCount: 123,
    postCount: 100,
    posts: null,
  },
];

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
            <BoardCard key={board.id} {...board} />
          ))}
        </div>
      </main>
    </div>
  );
}
