import { Button, TextArea, TextField } from "@radix-ui/themes";
import { UploadCloudIcon } from "lucide-react";
import React from "react";

// This form is built by using Redux UI

const Settings = () => {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="font-bold text-2xl mb-4">Profile Section</h1>
      <div className="flex items-center gap-4 mb-5">
        <div className="bg-gray-500 size-24 rounded-full"></div>
        <Button>
          <UploadCloudIcon size={20} /> Upload new Avatar
        </Button>
      </div>
      <p className="text-sm font-semibold text-gray-500 mt-4 mb-1">UserName</p>
      <TextField.Root placeholder="UserName"></TextField.Root>
      <p className="text-sm font-semibold text-gray-500 mt-4 mb-1">Name</p>
      <TextField.Root placeholder="Name"></TextField.Root>
      <p className="text-sm font-semibold text-gray-500 mt-4 mb-1">SubTitle</p>
      <TextField.Root placeholder="Developer"></TextField.Root>
      <p className="text-sm font-semibold text-gray-500 mt-4 mb-1">Bio</p>
      <TextArea></TextArea>
      <div className="mt-4 flex justify-end">
        <Button variant="solid" color="red">
          Save settings
        </Button>
      </div>
    </div>
  );
};

export default Settings;
