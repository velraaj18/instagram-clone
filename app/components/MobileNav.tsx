import React from 'react'
import Link from "next/link";
import { CameraIcon, GridIcon, HomeIcon, SearchIcon, UserIcon } from "lucide-react";

const MobileNav = () => {
  return (
    <div className="fixed block lg:hidden bottom-0 rounded-t-2xl bg-white px-8 py-4 left-0 right-0 max-w-lg mx-auto">
            <div className="flex justify-between *:flex *:items-center *:justify-center">
              <Link href="">
                <HomeIcon/>
              </Link>
              <Link href="/search">
                <SearchIcon/>
              </Link>
               <Link href="/create" className="bg-linear-to-r from-ig-red to-ig-orange size-12 rounded-full">
                <CameraIcon className="text-white"/>
              </Link>
              <Link href="/browse">
                <GridIcon/>
              </Link>
              <Link href="/profile">
                <UserIcon className="text-ig-red"/>
              </Link>
            </div>
        </div>
  )
}

export default MobileNav