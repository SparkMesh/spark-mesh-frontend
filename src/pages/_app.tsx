import "@/styles/globals.css";
import "@/components/styles.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar";
export default function App({ Component, pageProps }: AppProps) {
 const router = useRouter();
  return (
    <main>
      <NavBar />
      <AnimatePresence mode="wait">
      <Component  key={router.asPath} {...pageProps} /></AnimatePresence>
    </main>
  );
}
