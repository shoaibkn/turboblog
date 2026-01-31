import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MessageSquare, User, User2 } from "lucide-react";
import { users } from "@/constants";

interface ThreadCardProps {
  id: string;
  boardId: string;
  title: string;
  content: string;
  authorId?: string | null;
  authorType: string;
  createdAt: string;
  // replyCount: number;
  image?: string;
}

export function ThreadCard({
  id,
  boardId,
  title,
  content,
  authorId,
  authorType,
  createdAt,
  // replyCount,
  image,
}: ThreadCardProps) {
  return (
    <Link href={`/board/${boardId}/thread/${id}`}>
      {/* <Card className="hover:border-primary transition-colors cursor-pointer p-0 h-64">
        <CardContent className="flex flex-row gap-0 p-0">
          <div className="bg-red-300 h-full w-30">asa </div>
          <div>
            <CardHeader className="pb-3 h-full">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {author}
                    </span>
                    <span>•</span>
                    <span>{createdAt}</span>
                  </div>
                </div>
                {imageUrl && (
                  <div className="shrink-0 w-16 h-16 rounded overflow-hidden bg-muted">
                    <img
                      src={imageUrl || "/placeholder.svg"}
                      alt="Thread thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </CardHeader>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
              {content}
            </p>
            <div className="flex items-center gap-2">
              <Badge className="flex items-center gap-1">
                <MessageSquare className="h-3 w-3" />
                {replyCount} {replyCount === 1 ? "reply" : "replies"}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card> */}

      <Card className="p-0 flex flex-row gap-0 h-48">
        {image && (
          <div className="h-full w-[20%]">
            <img
              src={image || "/placeholder.svg"}
              alt="Thread thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <CardContent className="h-full gap-0 p-0 w-full flex justify-between flex-col">
          <CardHeader className="p-0 w-full">
            {/* Top */}
            <div className="flex flex-row w-full justify-between p-2">
              <span className="flex flex-row gap-1 text-xs items-center align-middle">
                <User2 size={12} />
                {authorType === "REGISTERED"
                  ? users.find((user) => user.id === authorId)?.username
                  : "Anonymous"}
              </span>
              <span className="flex flex-row gap-1">
                {/* <Badge>OP</Badge>
                <Badge variant={"outline"}>#1234</Badge> */}
              </span>
            </div>
            <div className="px-2 ">
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription>{content}</CardDescription>
            </div>
          </CardHeader>
          {/* Footer */}
          <div className="p-2 flex flex-row justify-between">
            <span className="flex flex-row gap-1 items-center">
              <MessageSquare size={18} />
              {/* {replyCount} {replyCount === 1 ? "reply" : "replies"} */}
              120
            </span>
            <span className="flex flex-row gap-1 items-center">
              <Clock size={18} /> {createdAt}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
