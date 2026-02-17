import { Comment } from "@/dto/Comment";
import { PostComment } from "@/dto/PostComment";
import React from "react";
import { format, formatDate } from "date-fns";

const CommentPage = (comment: { comment: Comment }) => {
  const data = comment.comment;

   const formattedDate = data.createdAt
    ? format(new Date(data.createdAt), "PPpp")
    : ""

  return (
    <>
      <div className="mt-4 flex gap-6">
        <div className="">
          {data.profile && (
            <div className="flex gap-2">
              <div className="size-8 aspect-square overflow-hidden rounded-full">
                <img
                  src={data.profile.Avatar || ""}
                  alt="profile"
                  className="w-full h-full object-cover"
                ></img>
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold">{data.profile.Name}</h3>
                <div className="bg-gray-300 rounded-md mt-2 p-2">
                  <p className="">{data.commentContent}</p>
                </div>
                <p className="text-xs font-bold text-gray-300 flex justify-end">{formattedDate}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CommentPage;
