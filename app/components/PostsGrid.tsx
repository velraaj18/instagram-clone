"use client";

import React from "react";
import Masonry from "react-masonry-css";

const PostsGrid = () => {
  const imageUrls = [
    "https://picsum.photos/id/238/768/1024",
    "https://picsum.photos/id/239/1024/768",
    "https://picsum.photos/id/240/768/1024",
    "https://picsum.photos/id/241/1024/768",
    "https://picsum.photos/id/242/768/1024",
    "https://picsum.photos/id/243/1024/768",
    "https://picsum.photos/id/244/768/1024",
    "https://picsum.photos/id/24/1024/768",
    "https://picsum.photos/id/26/768/1024",
    "https://picsum.photos/id/247/1024/768",
    "https://picsum.photos/id/248/768/1024",
    "https://picsum.photos/id/249/1024/768",
    "https://picsum.photos/id/250/768/1024",
    "https://picsum.photos/id/251/1024/768",
    "https://picsum.photos/id/252/768/1024",
    "https://picsum.photos/id/253/1024/768",
    "https://picsum.photos/id/254/768/1024",
    "https://picsum.photos/id/255/1024/768",
    "https://picsum.photos/id/256/768/1024",
    "https://picsum.photos/id/257/1024/768",
  ];

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
        {imageUrls.map((img) => (
          <div className="mb-4" key={img}>
            <img src={img} alt="" />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default PostsGrid;
