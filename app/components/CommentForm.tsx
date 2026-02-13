import { Button, TextArea } from "@radix-ui/themes";
import { GetProfileDetails } from "../(routes)/settings/actions";
import Avatar from "./Avatar";
import { SendIcon, UploadCloudIcon } from "lucide-react";
import { AddComment } from "../(routes)/posts/[id]/action";

export default async function CommentForm() {
  const profile = await GetProfileDetails();
  
  return (
    <form action={}>
      <div className="flex gap-6">
        <Avatar profileUrl={profile.Avatar || ""} />
        <div className="w-5/6">
          <TextArea placeholder="Comment your thoughts here..." name="commentContent"/>
          <div className="mt-2">
            <Button type="submit">
              <SendIcon size={16}/>
              Add Comment
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
