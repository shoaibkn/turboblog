"use client";

import React from "react";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Upload } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function NewThreadPage() {
  const params = useParams();
  const router = useRouter();
  const boardId = params.boardId as string;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle thread creation logic here
    console.log("New thread:", { boardId, title, content, image });
    // Redirect to board page after submission
    router.push(`/board/${boardId}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-8">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" asChild className="mb-4">
            <Link href={`/board/${boardId}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to /{boardId}/
            </Link>
          </Button>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Create New Thread</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Thread Title</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Enter a descriptive title for your thread"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    placeholder="Write your post content here..."
                    className="min-h-48 resize-none"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    You can use {">>"} to quote other posts
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Image (Optional)</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("image")?.click()}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      {image ? "Change Image" : "Upload Image"}
                    </Button>
                    {image && (
                      <span className="text-sm text-muted-foreground">
                        {image.name}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push(`/board/${boardId}`)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Create Thread</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
