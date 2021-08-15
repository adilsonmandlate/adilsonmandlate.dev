import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-rows-app min-h-screen justify-items-center pt-48">
        <Navbar />
        <main className="max-w-5xl w-full px-6 md:px-12 h-full my-auto">
          <Component {...pageProps} />
        </main>
        <Footer className="max-w-full w-full h-full flex justify-center items-center" />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
