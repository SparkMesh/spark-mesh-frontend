import Link from "next/link";

import React, { useEffect, useState,useRef } from "react";
import Logo from "./Logo";
import { motion, useAnimationControls } from "framer-motion";
import { useRouter } from "next/router";
import { SocialIcon } from "react-social-icons";
type Props = {};
const CustomLink = ({
  
  href,
  controls,
  
  title,
  className = "",
}: {
  href: string;
  title: string;
  controls: any;
  
  
  className: string;
}) => {
  const router = useRouter();

  return (
    <Link
      onClick={() => {
        controls.start({ x: 2000 });

        //console.log(controls);
      }}
      href={href}
      className={`${className} relative mr-2 group`}
    >
      {title}
      <span
        className={`h-[2px] rounded-full inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"
          }`}
      ></span>
    </Link>
  );
};

const NavBar = ({ }: Props) => {
  const controls = useAnimationControls();
  const [width,setWidth] =useState(0)
const ref = useRef<HTMLDivElement>(null)
useEffect(() => {
  if(window.innerWidth<440){
    ref.current?.classList.add('!left-[32vw]')
    
  }
  else{
    ref.current?.classList.remove('!left-[32vw]')
  }
  
  setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
     
      
        
        return setWidth(window.innerWidth);
      }
     
    );

    return () => {
      window.removeEventListener("resize", () => {
        return setWidth(window.innerWidth);
      });
    };
 
}, []);
  useEffect(() => {
if(width<440){
  ref.current?.classList.add('!left-[32vw]')
  
}
else{
  ref.current?.classList.remove('!left-[32vw]')
}

  }, [width]);
  return (
    
    <header 
    style={{zIndex:100}}
    className={`sm:absolute z-40 fixed sm:top-5 sm:bottom-auto bottom-5 w-screen sm:px-[10vw] px-[5vw] py-[1.5vh] font-medium flex items-center justify-between`}>
      <nav className="flex w-full gap-2">
        <div className="flex gap-2 sm:w-auto w-full ">
        <CustomLink
          key={1}
          
          
          controls={controls}
          className=""
          href="/"
          title="Home"
        />

        <CustomLink
          key={2}
          
          
          controls={controls}
          className=""
          href="/projects"
          title="Projects"
        ></CustomLink></div>
        <div
        className="flex gap-2  sm:w-auto  w-full justify-end"
        >
        <CustomLink
          key={3}
          
          
          controls={controls}
          className=""
          href="/about"
          title="About"
        ></CustomLink>
        <CustomLink
          key={4}
          
          
          controls={controls}
          className=""
          href="/articles"
          title="Articles"
        ></CustomLink></div>
      </nav>
      <Logo />
<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:1}}

>
      <nav
      
      ref = {ref}
      className=" fixed bg-white w-[130px] p-1  rounded-full sm:top-[4vh] top-[2.65vh] md:left-auto sm:right-[10vw] sm:left-auto left-[38vw] flex flex-row gap-4">
        <SocialIcon
          style={{ height: 30, width: 30 }}
          className="hover:scale-125 transition focus:scale-75"
          network="linkedin"
          target="_blank"
          url="https://www.linkedin.com/company/spark-mesh"
        />
        <SocialIcon
          style={{ height: 30, width: 30 }}
          className="hover:scale-125 transition focus:scale-75"
          network="github"
          target="_blank"
          url="https://github.com/SparkMesh"
        />
        <SocialIcon
          style={{ height: 30, width: 30 }}
          className="hover:scale-125 transition focus:scale-75"
          network="discord"
          target="_blank"
          url="https://discord.gg/UEd3NdFGdT"
        />
      </nav>
      </motion.div>
      
    </header>
    
    
    
    
  );
};

export default NavBar;
