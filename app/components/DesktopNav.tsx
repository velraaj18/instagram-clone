import React from "react";
import Link from "next/link";
import {
  CameraIcon,
  GridIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";

const DesktopNav = () => {
  return (
    <div className="hidden lg:block bg-slate-200 p-4 w-64">
      <div className="sticky top-0">
        <div>
          <img
            src="https://imgs.search.brave.com/6jd1RkAQ_iS7PcM3EjjP55Yi2SS-_Ja--mC5UoUh7ss/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvSW5zdGFncmFt/LUxvZ28tMjAxNi1w/cmVzZW50LTcwMHgz/OTQucG5n"
            alt=""
            className=""
          />
          <div className="*:flex *:items-center *:gap-2 inline-flex flex-col gap-8 ml-2">
            <Link href="/">
              <HomeIcon />
              Home
            </Link>
            <Link href="/search">
              <SearchIcon />
              Search
            </Link>
            <Link href="/create">
              <CameraIcon />
              Add post
            </Link>
            <Link href="/browse">
              <GridIcon />
              Browse here
            </Link>
            <Link href="/profile">
              <UserIcon className="text-ig-red" />
              Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
