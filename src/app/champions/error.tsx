"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { refresh } = useRouter();
  return (
    <div>
      <h2>챔피언 페이지 에러.. 새로고침 해주세요!</h2>
      <h2>{error.message}</h2>
      <button
        onClick={() =>
          startTransition(() => {
            refresh();
            reset();
          })
        }
      >
        새로고침
      </button>
    </div>
  );
}
