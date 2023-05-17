import React from "react";
import avatar from "./avatar.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import { LinkIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
type Props = {};

const HomeUI = (props: Props) => {
  const MotionLink = motion(Link);
  const text = "Hi, We're SparkMesh";
  const text_h2 = "Building smarter software for a better tomorrow.";
  const text_h3 = 'Our team of talented developers, designers, and technology experts work tirelessly to develop custom software solutions that meet the unique needs and goals of our clients. We leverage the latest technologies and industry best practices to build software that drives efficiency, productivity, and growth.'
  return (
    <div className="h-screen pt-10 flex flex-col gap-2 justify-center items-center">
      <div className=" w-screen gap-2 flex flex-row justify-center items-center px-5 md:px-10 xl:px-20">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-[50%] flex justify-end items-center"
        >
          <Image src={avatar} height={350} width={350} alt="avatar" />
        </motion.div>
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`flex flex-col w-[50%]  `}
        >
          <motion.h1 className={`text-4xl font-bold `}>
            {text.split(" ").map((char, index) => {
              if (char == "SparkMesh") {
                return (
                  <motion.span
                    key={char + "-" + index}
                    
                    animate={{
                      backgroundClip: "text",

                      color: [
                        " rgba(253,29,29,1)",
                        " rgba(252,176,69,1)",
                        " rgba(131,58,180,1)",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 2,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}

                    //className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 "
                  >
                    {char + " "}
                  </motion.span>
                );
              }
              return (
                <motion.span
                  key={char + "-" + index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.3 }}
                >
                  {char + " "}
                </motion.span>
              );
            })}
          </motion.h1>
          <h2 className="text-2xl my-2 font-thin ">
            {text_h2.split(" ").map((char, index) => {
              return (
                <motion.span
                  key={char + "-" + index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {char + " "}
                </motion.span>
              );
            })}
          </h2>
          <h3 className="text-lg">
          {text_h3.split(" ").map((char, index) => {

              return (
                <motion.span
                  key={char + "-" + index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {char + " "}
                </motion.span>
              );
            })}
          </h3>
        </motion.div>
      </div>
      <div className="flex flex-row justify-center items-center m-2">
        <MotionLink
        href="/portfolio.pdf"
        target={"_blank"}
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          
          className="flex flex-row justify-center items-center gap-2 cursor-pointer bg-black rounded-lg p-5 m-2 text-white font-semibold border-2 border-black hover:bg-white hover:text-black"
        >
          Company Portfolio <LinkIcon className="h-5 w-5 " />
        </MotionLink>
        <MotionLink
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          className="flex flex-row gap-2 justify-center items-center text-lg font-thin"
          href="mailto:sparkmeshtech@gmail.com"
        >
          Contact Us <ArrowRightIcon className="w-5 h-5" />
        </MotionLink>
      </div>
    </div>
  );
};

export default HomeUI;
