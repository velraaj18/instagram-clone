import { saveProfile } from "./actions";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { UploadCloudIcon } from "lucide-react";

const Settings = () => {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="font-bold text-2xl mb-4">Profile Section</h1>

      <form action={saveProfile}>
        <div className="flex items-center gap-4 mb-5">
          <div className="bg-gray-500 size-24 rounded-full"></div>
          <Button type="button">
            <UploadCloudIcon size={20} /> Upload new Avatar
          </Button>
        </div>

        <p className="text-sm font-semibold text-gray-500 mt-4 mb-1">UserName</p>
        <TextField.Root name="UserName" placeholder="UserName" />

        <p className="text-sm font-semibold text-gray-500 mt-4 mb-1">Name</p>
        <TextField.Root name="Name" placeholder="Name" />

        <p className="text-sm font-semibold text-gray-500 mt-4 mb-1">SubTitle</p>
        <TextField.Root name="SubTitle" placeholder="Developer" />

        <p className="text-sm font-semibold text-gray-500 mt-4 mb-1">Bio</p>
        <TextArea name="Bio" />

        <div className="mt-4 flex justify-end">
          <Button type="submit" color="red">
            Save settings
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
