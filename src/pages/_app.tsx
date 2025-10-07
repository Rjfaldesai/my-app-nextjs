import "../app/globals.css"; /*using App CSS*/
import Navbar from "../components/Navbar";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar /> {/* Navigation appears on all pages */}
      <Component {...pageProps} />
    </>
  );
}
