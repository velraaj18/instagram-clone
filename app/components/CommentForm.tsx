import { TextArea } from "@radix-ui/themes";
import { GetProfileDetails } from "../(routes)/settings/actions";
import Avatar from "./Avatar";

export default async function CommentForm() {
  const profile = await GetProfileDetails();
  return (
    <form action="">
      <div className="flex gap-6">
        <Avatar profileUrl={profile.Avatar || ""} />
        <div className="w-5/6">
          <TextArea placeholder="Comment your thoughts here..."/>
        </div>
      </div>
    </form>
  );
}
