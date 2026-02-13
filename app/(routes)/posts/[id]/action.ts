import { PostComment } from "@/dto/PostComment";
import { prisma } from "@/lib/db";

export async function GetSinglePostById(postId: string) {
  const response = await prisma.post.findFirstOrThrow({
    where: {
      id: postId,
    },
  });

  return response;
}

export async function GetAllPostsByUserId(userId: string) {
  const response = await prisma.post.findMany({
    where: {
      profileId: userId,
    },
  });

  return response;
}

export async function AddComment(data: PostComment) {
  if (data) {
    const response = await prisma.postComment.create({
      data: {
        commentContent: data.commentContent,
        profileId : data.profileId,
        postId : data.postId
      },
    });
    return response
  }
}
