"use client";

import { pinata } from "@/lib/config";
import { Button, TextArea } from "@radix-ui/themes";
import { SendIcon, UploadCloudIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const CreatePage = () => {
  const fileInRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageURL] = useState<string | null>("");

  useEffect(() => {
    if (!file) return;
    const data = new FormData();
    data.set("file", file);
    fetch("api/uploadFile", {
      method: "POST",
      body: data,
    }).then(async (res) => {
      const response = await res.json();
      console.log(response);
      const url = `https://${process.env.NEXT_PUBLIC_GATEWAY_URL}/files/${response.data.cid}`;
      setImageURL(url);
    });
  }, [file]);
  return (
    <form className="flex flex-col gap-6 mt-16">
        <div className="w-48 min-h-64 bg-gray-500 flex items-center justify-center relative">
          <img src="https://picsum.photos/id/237/200/300" alt="" />
          <div className="absolute inset-0 flex items-center justify-center">
            <input
              type="file"
              className="hidden"
              ref={fileInRef}
              onChange={(e) => setFile(e.target?.files?.[0] || null)}
              name="PostFile"
            />
            <Button type="button" onClick={() => fileInRef.current?.click()}>
              <UploadCloudIcon size={16} />
              Add image here
            </Button>
          </div>
      </div>
      <div>
        <TextArea
          rows={6}
          placeholder="Add content here..."
          name="PostContent"
        />
      </div>
      <div>
        <Button className="flex">
          <SendIcon size={16} />
          Publish
        </Button>
      </div>
    </form>
  );
};

export default CreatePage;
