import { GetAllPostsByUserId } from "../(routes)/posts/[id]/action"
import PostsGrid from "./PostsGrid"

export default async function ProfilePosts({userId} : {userId : string }){
    const posts = await GetAllPostsByUserId(userId)
    // console.log("posts:", posts)

    return(
        <>
            <PostsGrid posts={posts}/>
        </>
    )
}