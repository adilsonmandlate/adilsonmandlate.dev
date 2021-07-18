import "../styles/global.css";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-rows-app">
      <Navbar />
      <div className="min-h-app pt-24 flex justify-center self-center">
        <main className="max-w-3xl px-6 md:px-12 h-full m-auto">
          <Component {...pageProps} />
        </main>
      </div>

      <Footer className="max-w-full self-center mb-8 md:mb-2 text-center" />
    </div>
  );
}

export default MyApp;
