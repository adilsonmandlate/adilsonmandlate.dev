import "../styles/global.css";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-rows-app min-h-screen justify-items-center pt-24">
      <Navbar />
      <main className="max-w-3xl w-full px-6 md:px-12 h-full my-auto">
        <Component {...pageProps} />
      </main>
      <Footer className="max-w-full self-center mb-8 md:mb-2 text-center" />
    </div>
  );
}

export default MyApp;
