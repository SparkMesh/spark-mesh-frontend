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
  const text_h3 = 'Our team of talented developers, designers, and technology experts work tirelessly to develop custom software solutions that meet the unique needs and goals of our clients.'
  return (
    <div className="h-screen z-0  pb-[10vh] pt-[20vh] grid  grid-cols-2 grid-rows-2 gap-4 justify-center items-center">
      {/* <div className=" w-screen gap-10 flex flex-row justify-center items-center px-5 md:px-10 xl:px-20"> */}
        <motion.div
          
          className=" flex justify-end items-center"
        >
          <Image className=" lg:w-[20vw] sm:w-[25vw] w-[40vw] "  src={avatar} height={300} width={300} alt="avatar" />
        </motion.div>
        <motion.div
          
          className=" flex flex-col justify-end items-start w-[30vw]"
        >
          <motion.h1 className={` sm:text-[2.5vw] text-[8vw]  font-bold `}>
            {text.split(" ").map((char, index) => {
              if (char == "SparkMesh") {
                return (
                  <motion.span
                    key={char + "-" + index}
                    initial={{  y: 50,clipPath: "inset(100% 0% 0% 0% round 10px)" }}
                    animate={{
                      
                      
                      backgroundClip: "text",
                      y: 0,clipPath: "inset(0% 0% 0% 0% round 10px)",
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
                      delay: index * 0.2,
                      clipPath: {repeat: 0,duration: 0.5,ease: "easeInOut",},
                      y:{repeat: 0,duration: 0.5,ease: "easeInOut",}
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
          <h2 className="text-lg my-2 font-thin ">
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
          <h3 className="text-sm sm:block hidden">
          {text_h3.split(" ").map((char, index) => {

              return (
                <motion.span
                  key={char + "-" + index}
                  
                  initial={{ opacity: 0,clipPath: "inset(100% 0% 0% 0%)" }}
                  animate={{ opacity: 1,clipPath: "inset(0% 0% 0% 0%)", }}
                  transition={{ delay: index * 0.05 }}
                >
                  {char + " "}
                </motion.span>
              );
            })}
          </h3>
        </motion.div>
      {/* </div> */}
      {/* <div className="flex flex-row justify-center items-center gap-10"> */}
        
        <div className="flex justify-end"><MotionLink
        href="/portfolio.pdf"
        target={"_blank"}
        download={true}
          initial={{ x:'-5vw',opacity:0 }}
          animate={{ x:0,opacity:1}}
          transition={{ delay: 0.5,ease: "easeInOut", }}
          viewport={{ once: true }}
          className="flex  justify-center group focus:scale-90 items-center sm:w-[17vw] w-[38vw] gap-2 bg-black rounded-lg p-5 m-2 text-white font-semibold border-2 border-black hover:bg-white hover:text-black"
        >
          <p className="group-focus:scale-90 transition-all ">Company Portfolio</p><LinkIcon className="group-focus:scale-90 transition-all w-[10vw] sm:w-[2.3vw] " />
        </MotionLink></div>
        <div className="flex justify-start">
        <MotionLink
        variants={{
          visible: {  x:0 ,opacity:1, },
          hidden: { x:'5vw',opacity:0  }
        }}
        initial="hidden"
        whileInView="visible"
          
          transition={{ delay: 0.5,ease:"easeInOut"}}
          className="flex gap-2 justify-start items-center group "
          href="mailto:sparkmeshtech@gmail.com"
        >
         <p className="group-focus:scale-90 transition-all text-2xl font-thin">Contact Us</p>  <ArrowRightIcon className="group-hover:rotate-180 transition-all group-focus:scale-75  w-[8vw] sm:w-[2.3vw]" />
        </MotionLink></div>
      {/* </div> */}
    </div>
  );
};

export default HomeUI;
