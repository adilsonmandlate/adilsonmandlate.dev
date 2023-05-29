import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main
          className={`grid flex-col flex-1 my-0 mx-auto max-w-4xl w-full py-32 px-8 h-full ${
            router.pathname !== "/" ? "pb-0" : "pt-56"
          }`}
        >
          <div>
            <Component {...pageProps} />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
