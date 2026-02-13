import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import type { PostComment } from "@/dto/PostComment";

export async function POST(req: Request) {
  try {
    const body: PostComment = await req.json();

    if (!body.commentContent?.trim()) {
      return NextResponse.json(
        { error: "Comment content required" },
        { status: 400 }
      );
    }

    const response = await prisma.postComment.create({
      data: {
        commentContent: body.commentContent,
        profileId: body.profileId,
        postId: body.postId,
      },
    });

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }
}
