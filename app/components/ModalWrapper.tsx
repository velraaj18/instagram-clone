"use client";

import { useRouter } from "next/navigation";

export default function ModalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-xl shadow-xl flex flex-col">
          <button
            onClick={() => router.back()}
            className="absolute top-3 right-3 text-gray-500"
          >
            ✕
          </button>

          <div className="overflow-y-auto p-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
