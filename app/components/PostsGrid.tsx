"use client";

import { Post } from "@/generated/prisma/client";
import Link from "next/link";
import React from "react";
import Masonry from "react-masonry-css";

const PostsGrid = ({ posts }: { posts: Post[] }) => {
  //  react-masonry-css Is a React Component with a simple interface to order items into the desired columns at specified breakpoints. With minimal CSS this leads to a quick, reliable solution that also has great browser support along with rendering performance.

  return (
    <div className="max-w-4xl mx-auto">
      <Masonry
        breakpointCols={{
          default: 4,
          768: 3,
          500: 2,
        }}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4"
      >
        {/* array of JSX items */}
        {posts.map((data) => (
          <div className="mb-4" key={data.id}>
            <Link href={`/posts/${data.id}`} className="block">
              {data.ImageUrl && <img src={data.ImageUrl} alt="" />}
            </Link>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default PostsGrid;
