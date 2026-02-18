import { Post, Profile } from "@/generated/prisma/client"

export type Comment = {
    id : string
    commentContent : string
    profileId : string
    postId : string
    createdAt : Date | null
    updatedAt: Date | null
    profile : Profile | ""
}