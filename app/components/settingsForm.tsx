"use client";

import { Profile } from "@/generated/prisma/client";
import { saveProfile } from "../(routes)/settings/actions";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { UploadCloudIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const SettingsForm = ({ userDetails }: { userDetails: Profile }) => {
  const fileInRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState(userDetails.Avatar);
  const router = useRouter();

  useEffect(() => {
    if (!file) return;
    const data = new FormData();
    data.set("file", file);
    fetch("/api/uploadFile", {
      method: "POST",
      body: data,
    }).then(async (res) => {
      const response = await res.json();
      const url = `https://${process.env.NEXT_PUBLIC_GATEWAY_URL}/files/${response.data.cid}`;
      setAvatarUrl(url);
    });
  }, [file]);

  async function action(formData: FormData) {
    await saveProfile(formData);
    router.push("/profile");
  }

  return (
    <>
      <form action={action}>
        <div className="flex items-center gap-4 mb-5">
          <div className="bg-gray-500 size-24 rounded-full">
            <img
              src={userDetails.Avatar || ""}
              alt=""
              className="size-24 aspect-square rounded-full overflow-hidden border-2 border-red-500"
            />
          </div>
          <input
            type="file"
            className="hidden"
            ref={fileInRef}
            onChange={(e) => setFile(e.target?.files?.[0] || null)}
          />
          <Button type="button" onClick={() => fileInRef.current?.click()}>
            <UploadCloudIcon size={20} /> Upload new Avatar
          </Button>
        </div>

        <input type="hidden" name="avatar" value={avatarUrl ?? ""} />

        <p className="text-sm font-semibold text-gray-500 mt-4 mb-1">
          UserName
        </p>
        <TextField.Root
          name="UserName"
          placeholder="UserName"
          defaultValue={userDetails.UserName}
        />

        <p className="text-sm font-semibold text-gray-500 mt-4 mb-1">Name</p>
        <TextField.Root
          name="Name"
          placeholder="Name"
          defaultValue={userDetails.Name}
        />

        <p className="text-sm font-semibold text-gray-500 mt-4 mb-1">
          SubTitle
        </p>
        <TextField.Root
          name="SubTitle"
          placeholder="Developer"
          defaultValue={userDetails.SubTitle || ""}
        />

        <p className="text-sm font-semibold text-gray-500 mt-4 mb-1">Bio</p>
        <TextArea name="Bio" defaultValue={userDetails.Bio || ""} />

        <div className="mt-4 flex justify-end">
          <Button type="submit" color="red">
            Save settings
          </Button>
        </div>
      </form>
    </>
  );
};

export default SettingsForm;
