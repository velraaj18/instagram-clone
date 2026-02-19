"use server"

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

export async function ToggleLike(postId : string, profileId : string){
  const exisitingLike = await prisma.like.findUnique({
    where: {
      profileId_postId : {
        profileId,
        postId
      }
    }
  })

  if(exisitingLike){
    await prisma.like.delete({
      where: {
      profileId_postId : {
        profileId,
        postId
      }
    }
    })
  }else{
    await prisma.like.create({
      data: {
        profileId,
        postId
    }
    })
  }

}

export async function GetLikesCountOfPost(postId : string){
  const likeCount = await prisma.like.count({
    where: {
      postId : postId
    }
  })

  return likeCount
}

export async function HasUserLiked(postId: string, profileId: string) {
  const like = await prisma.like.findUnique({
    where: {
      profileId_postId: {
        profileId,
        postId
      }
    }
  })

  return !!like
}
