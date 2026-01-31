import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquareIcon } from "./ui/message-square";

interface BoardCardProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  threadCount: number;
  postCount: number;
}

export function BoardCard({
  id,
  name,
  slug,
  description,
  category,
  threadCount,
  postCount,
}: BoardCardProps) {
  return (
    <Link href={`/board/${id}`}>
      <Card className="h-full hover:border-primary transition-colors cursor-pointer w-96 p-4">
        <CardHeader className="p-0">
          <div className="flex items-start justify-between ">
            <CardTitle className="text-xl flex flex-col items-start">
              <h3 className="italic text-sm">/{slug.toLowerCase()}/</h3>
              {name}
            </CardTitle>
            <Badge>{category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-xs text-muted-foreground mb-4">{description}</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span className="flex flex-row items-center gap-2">
              <MessageSquareIcon size={16} /> {threadCount} threads
            </span>
            |<span>{postCount} posts</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
