import PostsGrid from "@/app/components/PostsGrid";
import { Check, ChevronLeft, Cog } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
import { GetProfileDetails } from "../settings/actions";
import ProfilePosts from "@/app/components/ProfilePosts";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  var profileDetails = await GetProfileDetails();
  // console.log("profileDetails:", profileDetails)

  if(!profileDetails){
    redirect('/settings')
  }
  return (
    <main className="">
      <section className="flex justify-between items-center">
        <div className="">
          <ChevronLeft />
        </div>
        <div className="font-bold flex items-center gap-2">
          {profileDetails?.UserName}
          <div className="size-4 inline-flex justify-center items-center bg-ig-red rounded-full text-white">
            <Check size={16} />
          </div>
        </div>
        <div className="">
          <Link href={"/settings"}>
            <Cog />
          </Link>
        </div>
      </section>
      <section className="flex justify-center mt-8">
        <div className="size-48 p-2 rounded-full bg-linear-to-tr from-ig-orange to-ig-red ">
          <div className="size-44 p-2 rounded-full bg-white">
            <div className="size-40 aspect-square overflow-hidden rounded-full">
              {profileDetails?.Avatar && (
                <img
                  src={profileDetails.Avatar || ""}
                  alt=""
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mt-3">
        <h1 className="text-xl font-bold">{profileDetails?.Name}</h1>
        <p className="text-gray-500 mt-1 mb-1">{profileDetails?.SubTitle}</p>
        <p className="text-sm font-bold">{profileDetails?.Bio}</p>
      </section>
      <section className="mt-8">
        <div className="flex justify-center font-bold gap-4">
          <Link href={""}>Profile</Link>
          <Link href={"/highlights"} className="text-gray-400">
            Higlights
          </Link>
        </div>
      </section>
      <section className="mt-8">
        {profileDetails?.id && (
          <Suspense
            fallback={
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-white border-t-transparent" />
            }
          >
            <ProfilePosts userId={profileDetails.id} />
          </Suspense>
        )}
      </section>
    </main>
  );
};

export default ProfilePage;
