"use client";

import { HeartIcon } from "lucide-react";
import React, { useState, useTransition } from "react";
import { ToggleLike } from "../(routes)/posts/[id]/action";
import { useRouter } from "next/navigation";

const LikeInfo = ({
  postId,
  profileId,
  initialLikes,
  initiallyLiked,
}: {
  postId: string;
  profileId: string;
  initialLikes: number;
  initiallyLiked: boolean;
}) => {
  const router = useRouter();
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(initiallyLiked);
  const [isPending, startTransition] = useTransition();

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));

    startTransition(async () => {
      await ToggleLike(postId, profileId);
    });
  };

  return (
    <div className="flex gap-2 items-center">
      <button onClick={handleLike} disabled={isPending}>
        <HeartIcon
          className={`transition ${
            liked ? "text-red-500 fill-red-500 scale-110" : ""
          }`}
        />
      </button>

      <p>{likes} people like this</p>
    </div>
  );
};

export default LikeInfo;
