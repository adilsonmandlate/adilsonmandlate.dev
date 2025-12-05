"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const activeRoute = usePathname();

  return (
    <nav className="fixed z-10 top-0 right-0 left-0 w-full max-w-xs mx-auto flex justify-center py-5 px-4">
      <div
        className="flex flex-row items-center justify-between gap-4 rounded-full px-[6px] shadow-2xl  w-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          boxShadow:
            "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        <Link
          href="/"
          className={`no-underline p-2 rounded-full my-1 transition-all duration-300 hover:bg-white/10 ${
            activeRoute === "/" && "bg-white/10"
          }`}
        >
          <Image
            src="/icon-512.png"
            width={24}
            height={24}
            alt="Adilson Mandlate"
            className="rounded-full"
          />
        </Link>

        <Link
          href="/work"
          className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:text-white/80 no-underline decoration-1 underline-offset-4 ${
            activeRoute === "/work" && "font-bold no-underline bg-white/10"
          }`}
        >
          Work
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
