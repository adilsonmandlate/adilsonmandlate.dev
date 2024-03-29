import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main
          className={`grid flex-1 my-0 mx-auto max-w-4xl w-full py-32 px-8  ${
            router.pathname !== "/" ? "pb-0" : "pt-0 pb-0 sm:pt-56 sm:pb-8"
          }`}
        >
          <div>
            <Component {...pageProps} />
          </div>
        </main>
        <Footer />
      </div>
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
