"use client";

import { Button, TextArea } from "@radix-ui/themes";
import Avatar from "./Avatar";
import { SendIcon } from "lucide-react";
import { useState } from "react";
import type { PostComment } from "@/dto/PostComment";
import type { Profile } from "@/generated/prisma/client";

export default function CommentForm({
  postId,
  profile,
}: {
  postId: string;
  profile: Profile;
}) {
  const [form, setForm] = useState<PostComment>({
    commentContent: "",
    postId: postId,
    profileId: profile.id,
  });

  async function saveComment() {
    if (!form.commentContent.trim()) return;

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm((prev) => ({ ...prev, commentContent: "" }));
    }
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await saveComment();
      }}
    >
      <div className="flex gap-6">
        <Avatar profileUrl={profile.Avatar || ""} />

        <div className="w-5/6">
          <TextArea
            placeholder="Comment your thoughts here..."
            value={form.commentContent}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                commentContent: e.target.value,
              }))
            }
          />

          <div className="mt-2">
            <Button type="submit">
              <SendIcon size={16} />
              Add Comment
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
