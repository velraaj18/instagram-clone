"use client";

import { Button, TextArea } from "@radix-ui/themes";
import { SendIcon, UploadCloudIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import CreatePost from "./action";

const CreatePage = () => {
  const fileInRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageURL] = useState<string | null>("");

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
      setImageURL(url);
    });
  }, [file]);

  return (
    <form className="flex flex-col gap-6 mt-16" action={CreatePost}>
      <input type="hidden" name="ImageLink" value={imageUrl || ""} />

      <div className="w-48 min-h-64 bg-gray-500 flex items-center justify-center relative">
        {imageUrl && <img src={imageUrl} alt="" />}
        <div className="absolute inset-0 flex items-center justify-center">
          <input
            type="file"
            className="hidden"
            ref={fileInRef}
            onChange={(e) => setFile(e.target?.files?.[0] || null)}
          />
          <Button type="button" variant="surface" onClick={() => fileInRef.current?.click()}>
            <UploadCloudIcon size={16} />
            Add image here
          </Button>
        </div>
      </div>

      <TextArea
        rows={6}
        placeholder="Add content here..."
        name="PostContent"
      />

      <Button className="flex" type="submit">
        <SendIcon size={16} />
        Publish
      </Button>
    </form>
  );
};

export default CreatePage;
