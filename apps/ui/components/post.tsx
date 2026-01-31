import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Clock,
  Hash,
  User2,
  MessageSquare,
  ChevronsRight,
} from "lucide-react";

interface PostProps {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  postNumber: string;
  image?: string;
  replyCount?: number;
  isOriginalPost?: boolean;
}

export function Post({
  id,
  author,
  content,
  createdAt,
  postNumber,
  image,
  replyCount,
  isOriginalPost = false,
}: PostProps) {
  return (
    <Card className="p-0 flex flex-row gap-0 h-48">
      {image && (
        <div className="h-full w-[20%] border">
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
              {author || "Anonymous"}
              <ChevronsRight strokeWidth={1} size={12} />

              <Badge variant={"outline"} className="max-w-24 flex flex-row">
                {id}
              </Badge>
            </span>
            <span className="flex flex-row gap-1">
              {isOriginalPost && <Badge>OP</Badge>}
              <Badge variant={"outline"}>#{postNumber}</Badge>
            </span>
          </div>

          <div className="px-2 ">
            <p>{content}</p>
          </div>
        </CardHeader>
        {/* Footer */}
        <div className="p-2 flex flex-row justify-between">
          <span className="flex flex-row gap-1 items-center">
            <MessageSquare size={18} />
            {replyCount} {replyCount === 1 ? "reply" : "replies"}
          </span>
          <span className="flex flex-row gap-1 items-center">
            <Clock size={18} /> {createdAt}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
