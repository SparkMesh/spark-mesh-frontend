import "@/styles/globals.css";
import "@/components/styles.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  return (
    <main 
    
   className="relative h-screen w-screen "
    >
      <NavBar />
      <AnimatePresence 
     mode="wait"
      >
      <Component key={router.asPath}  {...pageProps} /></AnimatePresence>
      <SideBar 
      
      />
    </main>
  );
}
