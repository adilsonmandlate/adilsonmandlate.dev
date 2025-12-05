"use client";

import { usePathname } from "next/navigation";

export function MainWrapper({ children }) {
  const pathname = usePathname();

  return (
    <main
      className={`grid flex-1 my-0 mx-auto max-w-4xl w-full py-32 px-8 ${
        pathname !== "/" ? "pb-0" : "pt-0 pb-0 sm:pt-56 sm:pb-8"
      }`}
    >
      <div>{children}</div>
    </main>
  );
}
