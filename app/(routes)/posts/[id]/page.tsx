import Avatar from "@/app/components/Avatar";
import { GetProfileDetails } from "../../settings/actions";
import { GetLikesCountOfPost, GetSinglePostById, HasUserLiked } from "./action";
import CommentForm from "@/app/components/CommentForm";
import { prisma } from "@/lib/db";
import CommentPage from "@/app/components/Comment";
import LikeInfo from "@/app/components/LikeInfo";
import SinglePost from '../../../components/SinglePost';

export default async function SinglePostById({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await GetSinglePostById(id);
  const profile = await GetProfileDetails();
  const likesCount = await GetLikesCountOfPost(id);
  const hasLiked = profile
  ? await HasUserLiked(id, profile.id)
  : false;


  const comments = await prisma.postComment.findMany({
    where: { postId: post.id },
    include: {
      profile: true,
    },
  });

  return (
    <>
    {profile && 
       <SinglePost post={post} profile={profile} likesCount={likesCount} hasLiked={hasLiked} postComments={comments}/>
    }
    </>
  );
}
