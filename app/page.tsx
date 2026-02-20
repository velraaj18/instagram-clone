import { signIn, auth, signOut } from "@/auth";
import React from "react";

const Home = async () => {
  const session = await auth();
  return (
    <>
      {!session && (
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            type="submit"
            className="border-2 px-4 py-2 rounded-2xl text-white bg-ig-red"
          >
            Login with google
          </button>
        </form>
      )}
      {session && (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            type="submit"
            className="border-2 px-4 py-2 rounded-2xl  text-white bg-ig-red"
          >
            Logout
          </button>
        </form>
      )}
    </>
  );
};

export default Home;
