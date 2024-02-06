import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const activeRoute = usePathname();

  return (
    <nav className="fixed z-10 top-0 right-0  left-0 max-w-[290px] w-full mx-auto py-6 px-6 lg:px-0">
      <div className="flex flex-row font-bold items-center justify-between rounded-3xl py-1 px-2 bg-gray-900 bg-opacity-5 dark:bg-white dark:bg-opacity-5 backdrop-blur">
        <Link
          href="/"
          className={`no-underline px-4 py-1 rounded-2xl  duration-500 ${
            activeRoute === "/" && "bg-custom-green"
          }`}
        >
          <Image
            src="/icon-512.png"
            width={38}
            height={38}
            alt="Adilson Mandlate"
          />
        </Link>

        <div className="flex items-center">
          <Link
            href="/work/"
            className={`no-underline text-sm transition-all text-white px-4 py-3 rounded-2xl duration-500 ${
              activeRoute === "/work" && "bg-custom-green"
            } `}
          >
            Work
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
