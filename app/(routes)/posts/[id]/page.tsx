import Avatar from "@/app/components/Avatar";
import { GetProfileDetails } from "../../settings/actions";
import { GetSinglePostById } from "./action";
import CommentForm from "@/app/components/CommentForm";
import { prisma } from "@/lib/db";
import CommentPage from "@/app/components/Comment";

export default async function SinglePostById({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await GetSinglePostById(id);
  const profile = await GetProfileDetails();

  const comments = await prisma.postComment.findMany({
    where: { postId: post.id },
    include: {
      profile: true,
    },
  });

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-max">
        <div>
          {post.ImageUrl && (
            <img
              src={post.ImageUrl}
              alt={post.PostContent || ""}
              className=""
            ></img>
          )}
        </div>
        <div className="">
          <div className="flex gap-2">
            <Avatar profileUrl={profile.Avatar || ""} />
            <div className="flex flex-col w-5/6">
              <h3 className="text-lg font-bold">{profile.Name}</h3>
              <span className="text-xs font-bold text-gray-600 -mt-1">
                {profile.UserName}
              </span>
              <div className="bg-gray-300 rounded-md mt-4 p-4">
                <p className="">{post.PostContent}</p>
              </div>

              <div className="header mt-6">
                <h2 className="text-lg font-bold">Comments</h2>
                {comments &&
                  comments.map((res) => (
                    <CommentPage comment={res} key={res.id} />
                  ))}
              </div>
            </div>
          </div>
          <div className="border-t border-t-gray-300 mt-4"></div>
          <div className="mt-8">
            <CommentForm postId={post.id} profile={profile} />
          </div>
        </div>
      </div>
    </>
  );
}
