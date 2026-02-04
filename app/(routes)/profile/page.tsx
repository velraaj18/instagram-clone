import PostsGrid from "@/app/components/PostsGrid";
import { Check, ChevronLeft, Cog } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  return (
    <main>
      <section className="flex justify-between items-center">
        <div className="">
          <ChevronLeft />
        </div>
        <div className="font-bold flex items-center gap-2">
          Velraaj
          <div className="size-4 inline-flex justify-center items-center bg-ig-red rounded-full text-white">
            <Check size={16} />
          </div>
        </div>
        <div className="">
          <Link href={"/settings"}><Cog /></Link>         
        </div>
      </section>
      <section className="flex justify-center mt-8">
        <div className="size-48 p-2 rounded-full bg-linear-to-tr from-ig-orange to-ig-red ">
          <div className="size-44 p-2 rounded-full bg-white">
            <div className="size-40 aspect-square overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mt-3">
        <h1 className="text-xl font-bold">Velraaj</h1>
        <p className="text-gray-500 mt-1 mb-1">Junior .NET developer</p>
        <p className="text-sm font-bold">C#, ASP .NET MVC, Web API, SQL, React</p>
      </section>
      <section className="mt-8">
        <div className="flex justify-center font-bold gap-4">
          <Link href={""}>Profile</Link>
          <Link href={"/highlights"} className="text-gray-400">Higlights</Link>
        </div>
      </section>
      <section className="mt-8">
        <PostsGrid/>
      </section>
    </main>
  );
};

export default ProfilePage;
