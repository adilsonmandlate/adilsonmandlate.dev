import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="fixed z-10 top-0 right-0 left-0 max-w-3xl w-full mx-auto py-6 px-6 md:px-0">
      <div className="flex flex-row font-bold items-center justify-between rounded-2xl py-2 px-4 bg-gray-900 bg-opacity-5 dark:bg-white dark:bg-opacity-5 backdrop-blur">
        <Link href="/" className="text-gray-800 dark:text-gray-50 no-underline">
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
            className={`no-underline text-sm transition-all duration-500 hover:text-custom-dark-green dark:hover:text-custom-green ${
              router.pathname.includes("/work")
                ? "text-custom-dark-green dark:text-custom-green"
                : "text-gray-800 dark:text-gray-50"
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
