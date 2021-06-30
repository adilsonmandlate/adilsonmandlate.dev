import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

export default function Custom404() {
  return (
    <Fragment>
      <Head>
        <title>
          404: Page not found - Adilson Mandlate | Front end developer
        </title>
      </Head>

      <h1 className="text-6xl md:text-7xl font-serif text-title dark:text-white font-bold mb-5">
        404 | Not found
      </h1>

      <p className="text-lg md:text-2xl leading-9 max-w-4xl font-sans text-gray-800 dark:text-white">
        Sorry, but the page ${`you're`} trying to get ${`doesn't`} exist. Maybe
        go <Link href="/">home</Link>?
      </p>
    </Fragment>
  );
}
