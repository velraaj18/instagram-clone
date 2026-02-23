"use server";

import { Profile } from "@/generated/prisma/client";
import { prisma } from "@/lib/db";

export async function GetSearchProfile(search: string) {
  try {
    return prisma.profile.findMany({
      where: {
        OR: [
          {
            Name: {
              contains: search,
              mode: "insensitive",
            },
            UserName: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
