import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center fixed top-0 right-0 left-0 justify-between max-w-3xl w-full mx-auto px-12 py-6 md:py-12 bg-white dark:bg-gray-900">
      <Link href="/">
        <a className="text-gray-800 dark:text-gray-50 no-underline">Home</a>
      </Link>

      <Link href="/blog/test-post">
        <a className="text-gray-800 dark:text-gray-50 no-underline">Blog</a>
      </Link>
    </nav>
  );
};

export default Navbar;
