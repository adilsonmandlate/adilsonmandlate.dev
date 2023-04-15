import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Adilson Mandlate | Front end developer</title>
      </Head>

      <div className="flex flex-col justify-center h-main">
        <h1 className="text-5xl font-heading text-title dark:text-white mb-5">
          Adilson Mandlate
        </h1>

        <p className="text-base leading-7 max-w-2xl text-gray-800 dark:text-white">
          I am a frontend developer who makes things work beautifully, with an
          experience creating bespoke complex products that are tailored to meet
          the needs of my clients, with a creative and analytical approach
          ensuring that the end result is not only visually appealing, but also
          highly functional.
        </p>
      </div>
    </Fragment>
  );
}
