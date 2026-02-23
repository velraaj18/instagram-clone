import {
  GetLikesCountOfPost,
  GetSinglePostById,
  HasUserLiked,
} from "@/app/(routes)/posts/[id]/action";
import { GetProfileDetails } from "@/app/(routes)/settings/actions";
import SinglePost from "@/app/components/SinglePost";
import { prisma } from "@/lib/db";
import React from "react";
import ModalWrapper from "../../../../../components/ModalWrapper";

const Modal = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const post = await GetSinglePostById(id);
  const profile = await GetProfileDetails();
  const likesCount = await GetLikesCountOfPost(id);
  const hasLiked = await HasUserLiked(id, profile.id);

  const comments = await prisma.postComment.findMany({
    where: { postId: post.id },
    include: {
      profile: true,
    },
  });
  return (
    <div>
      <ModalWrapper>
        <SinglePost
          post={post}
          profile={profile}
          likesCount={likesCount}
          hasLiked={hasLiked}
          postComments={comments}
        />
      </ModalWrapper>
    </div>
  );
};

export default Modal;
