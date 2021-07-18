import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="custom-nav flex flex-row items-center fixed top-0 right-0 left-0 justify-between max-w-6xl w-full mx-auto px-6 md:px-12 py-4 bg-white dark:bg-gray-900">
      <Link href="/">
        <a className="text-gray-800 dark:text-gray-50 no-underline">
          <Image
            src="/icon-512.png"
            width={38}
            height={38}
            alt="Adilson Mandlate"
          />
        </a>
      </Link>

      <Link href="/blog/">
        <a className="text-gray-800 dark:text-gray-50 no-underline">Blog</a>
      </Link>
    </nav>
  );
};

export default Navbar;
