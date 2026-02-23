"use client";

import { Comment } from "@/dto/Comment";
import { Post, Profile } from "@/generated/prisma/client";
import Avatar from "./Avatar";
import LikeInfo from "./LikeInfo";
import CommentPage from "./Comment";
import CommentForm from "./CommentForm";

type props = {
  post: Post;
  profile: Profile;
  likesCount: number;
  hasLiked: boolean;
  postComments: Comment[];
};

export default function SinglePost({
  post,
  profile,
  likesCount,
  hasLiked,
  postComments,
}: props) {
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
              {post.PostContent && (
                <div className="bg-gray-300 rounded-md mt-4 p-4">
                  <p className="">{post.PostContent}</p>
                </div>
              )}

              <div className="mt-4">
                <LikeInfo
                  postId={post.id}
                  profileId={profile.id}
                  initialLikes={likesCount}
                  initiallyLiked={hasLiked}
                />
              </div>
              <div className="border-t border-t-gray-300 mt-4"></div>

              {postComments?.length > 0 && (
                <div className="header mt-4">
                  <h2 className="text-lg font-bold">Comments</h2>
                  {postComments.map((res) => (
                    <CommentPage comment={res} key={res.id} />
                  ))}
                  <div className="border-t border-t-gray-300 mt-4"></div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8">
            <CommentForm postId={post.id} profile={profile} />
          </div>
        </div>
      </div>
    </>
  );
}
