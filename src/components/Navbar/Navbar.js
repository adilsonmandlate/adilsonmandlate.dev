import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav className="flex flex-row items-center fixed top-0 right-0 left-0 justify-between max-w-7xl w-full mx-auto px-10 md:px-12 py-6 bg-white dark:bg-gray-900">
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

      <div className="flex">
        <Link href="/blog/">
          <a className="no-underline text-gray-800 dark:text-gray-50">Blog</a>
        </Link>
        <div className="text-gray-300 dark:text-gray-500 mx-7">•</div>
        <button
          aria-label="Toggle dark mode"
          type="button"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            className="w-4 h-4"
          >
            {resolvedTheme === "dark" ? (
              <>
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </>
            ) : (
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
