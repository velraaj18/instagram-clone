import { NextRequest, NextResponse } from "next/server";
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

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const profileId = searchParams.get("profileId")
    const postId = searchParams.get("postId")

    if (!profileId && !postId)
      return NextResponse.json(
        { error: "Any one Profile Id or Post Id needs to be provided" },
        { status: 400 }
      )

    const where: any = {}

    if (profileId) where.profileId = profileId
    if (postId) where.postId = postId

    const response = await prisma.postComment.findMany({ where })

    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch comment" },
      { status: 500 }
    )
  }
}

