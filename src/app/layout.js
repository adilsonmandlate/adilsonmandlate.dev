import "../styles/global.css";
import { ThemeProviderWrapper } from "../components/ThemeProviderWrapper";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { MainWrapper } from "../components/MainWrapper";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://adilsonmandlate.dev"),
  title: {
    default: "Adilson Mandlate | Front end developer",
    template: "%s | Adilson Mandlate | Front end developer",
  },
  description: "Adilson Mandlate | Front end developer based in Mozambique.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    description: "Adilson Mandlate | Front end developer based in Mozambique.",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Adilson Mandlate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@adilsonmandlate",
    title: "Adilson Mandlate | Front end developer",
    description: "Adilson Mandlate | Front end developer based in Mozambique.",
    images: ["/icon-512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "ts6KM6Dv4SPMIMaIRryYAkGrXLKIKqaU1dXkihI-bQ0",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-full" suppressHydrationWarning>
      <head>
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
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className="font-sans bg-black text-white min-h-screen"
        suppressHydrationWarning
      >
        <ThemeProviderWrapper>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <MainWrapper>{children}</MainWrapper>
            <Footer />
          </div>
          <Analytics />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
