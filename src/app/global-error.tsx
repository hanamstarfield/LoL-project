"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { refresh } = useRouter();
  return (
    <html>
      <body>
        <h2>에러 발생! 새로고침을 눌러주세요!</h2>
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
      </body>
    </html>
  );
}
