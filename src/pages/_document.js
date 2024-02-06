import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="min-h-full">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta name="theme-color" content="#000000" />
          <link
            rel="preload"
            href="/fonts/Biotif.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Neuzeit.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <meta
            name="google-site-verification"
            content="ts6KM6Dv4SPMIMaIRryYAkGrXLKIKqaU1dXkihI-bQ0"
          />
          <meta
            name="description"
            content="Adilson Mandlate | Front end developer"
          />
          <meta
            property="og:description"
            content="Adilson Mandlate | Front end developer based in Mozambique."
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/icon-512.png" />
          <meta property="twitter:image" content="/icon-512.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="Adilson Mandlate" />
          <meta
            name="twitter:title"
            content="Adilson Mandlate | Front end developer"
          />
          <meta
            name="twitter:text:title"
            content="Adilson Mandlate | Front end developer"
          />
          <meta
            name="twitter:description"
            content="Adilson Mandlate | Front end developer based in Mozambique."
          />
          <link rel="apple-touch-icon" sizes="192x192" href="/icon-192.png" />
          <link rel="apple-touch-icon" sizes="512x512" href="/icon-512.png" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body className="bg-white font-sans text-gray-900 dark:bg-black dark:text-white min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
