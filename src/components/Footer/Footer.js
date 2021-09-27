export const Footer = ({ ...props }) => {
  return (
    <footer className="w-full h-full grid md:grid-cols-2 max-w-7xl items-center pt-2 md:px-12 md:pt-0 border-t border-gray-700 dark:border-gray-800 border-opacity-5">
      <div className="flex justify-self-center md:justify-self-start mt-4 md:mt-0">
        <a
          href="https://github.com/adilsonmandlate"
          rel="nofollow noopener noreferrer"
          className="text-gray-800 dark:text-gray-50 mr-10"
        >
          <span className="sr-only">Github</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>

        <a
          href="https://twitter.com/adilsonmandlate"
          rel="nofollow noopener noreferrer"
          className="text-gray-800 dark:text-gray-50 mr-10"
        >
          <span className="sr-only">Twitter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a>

        <a
          href="mailto:me@adilsonmandlate.dev"
          className="text-gray-800 dark:text-gray-50"
        >
          <span className="sr-only">E-mail</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      </div>

      <p className="text-sm flex justify-self-center md:justify-self-end">
        @ {new Date().getFullYear()}
      </p>
    </footer>
  );
};
