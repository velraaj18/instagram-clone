import { GetProfileDetails } from "../../settings/actions";
import { GetSinglePostById } from "./action";

export default async function SinglePostById({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await GetSinglePostById(id);
  const profile = await GetProfileDetails();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {post.ImageUrl && (
            <img src={post.ImageUrl} alt={post.PostContent || ""}></img>
          )}
        </div>
        <div className="">
          <div className="flex gap-2">
            <div className="size-16 aspect-square overflow-hidden rounded-full">
              {profile.Avatar && (
                <img
                  src={profile.Avatar}
                  alt="profile"
                  className="w-full h-full object-cover"
                ></img>
              )}
            </div>
            <div className="flex flex-col">
                <h4>{profile.Name}</h4>
                <span className="text-sm text-gray-500 mt-1">{profile.UserName}</span>
                 <p>{post.PostContent}</p>
            </div>
          </div>
           
        </div>
      </div>
    </>
  );
}
