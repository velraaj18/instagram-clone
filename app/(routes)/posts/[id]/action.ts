import { prisma } from "@/lib/db";

export async function GetSinglePostById(postId : string){
    const response = await prisma.post.findFirstOrThrow({
        where: {
            id : postId
        }
    })

    return response
}

export async function GetAllPostsByUserId(userId : string){
    const response = await prisma.post.findMany({
        where:{
            profileId : userId
        },
    })

    return response;
}