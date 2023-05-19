import Link from "next/link";

import React from "react";
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

        console.log(controls);
      }}
      href={href}
      className={`${className} relative group`}
    >
      {title}
      <span
        className={`h-[1.5px] rounded-full inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"
          }`}
      ></span>
    </Link>
  );
};

const NavBar = ({ }: Props) => {
  const controls = useAnimationControls();
  
  
  return (
    <header className="fixed z-40 top-0 w-full px-[10vw] py-[2vh] font-medium flex items-center justify-between">
      <nav>
        <CustomLink
          key={1}
          
          
          controls={controls}
          className="mr-4"
          href="/"
          title="Home"
        />

        <CustomLink
          key={2}
          
          
          controls={controls}
          className="mx-4"
          href="/projects"
          title="Projects"
        ></CustomLink>
        <CustomLink
          key={3}
          
          
          controls={controls}
          className="mx-4"
          href="/about"
          title="About"
        ></CustomLink>
        <CustomLink
          key={4}
          
          
          controls={controls}
          className="ml-4"
          href="/articles"
          title="Article"
        ></CustomLink>
      </nav>
      <Logo />

      <nav className="flex flex-row gap-4">
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
    </header>
  );
};

export default NavBar;
