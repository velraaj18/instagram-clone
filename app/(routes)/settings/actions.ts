// app/settings/actions.ts
'use server';

import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

export async function saveProfile(formData: FormData) {
  console.log(formData);

  const session = await auth();
  if (!session?.user?.email) throw new Error("Unauthorized");

  const name = formData.get("Name") as string;
  const bio = formData.get("Bio") as string;
  const userName = formData.get("UserName") as string;
  const subTitle = formData.get("SubTitle") as string;
  const avatar = formData.get("avatar") as string

  await prisma.profile.upsert({
    where: { Email: session.user.email },
    update: { Name : name, Bio : bio, UserName: userName, SubTitle: subTitle, Avatar: avatar },
    create: {
      Email: session.user.email,
      Name : name, 
      Bio : bio,
      UserName : userName,
      SubTitle: subTitle,
      Avatar: avatar
    }
  });
}

export async function GetProfileDetails(){
  const session = await auth();

  if(!session?.user?.email){
    throw new Error("Email address is required");
  }

  const response = await prisma.profile.findFirstOrThrow({
    where : {Email : session?.user?.email}
  })

  return response;
}