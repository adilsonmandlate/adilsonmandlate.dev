import "../styles/global.css";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-rows-app">
      <div className="min-h-app flex justify-center self-center">
        <main className="max-w-5xl p-12 h-full m-auto">
          <Component {...pageProps} />
        </main>
      </div>

      <Footer className="self-center mb-8 md:mb-2 text-center" />
    </div>
  );
}

export default MyApp;
