import { NextResponse, type NextRequest } from "next/server";
import { pinata } from "@/lib/config"

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;
    const uploadData = await pinata.upload.public.file(file, {
        groupId: "ba2c3974-24fd-464b-b04d-502d2b9588fa"
    })
    console.log(uploadData)
    return NextResponse.json({data: uploadData}, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}