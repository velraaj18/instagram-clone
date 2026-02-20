"use server";

import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";

export default async function CreatePost(data: FormData) {
  const session = await auth();
  if (!session?.user?.email) throw new Error("Unauthorized");

  const image = data.get("ImageLink")?.toString();
  const content = data.get("PostContent")?.toString();

  const response = await prisma.post.create({
    data: {
      Email: session.user.email,
      ImageUrl: image,
      PostContent: content,
      profile : {
        connect:{
            Email: session.user.email
        }
      }
    },
  });

  redirect(`/post/${response.id}`);
}


