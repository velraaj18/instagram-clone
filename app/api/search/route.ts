import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") as string;
  try {
    const response = await prisma.profile.findMany({
      where: {
        OR: [
          {
            Name: {
              contains: query,
              mode: "insensitive",
            },
            UserName: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: error },
      { status: 500 }
    )
  }
}
