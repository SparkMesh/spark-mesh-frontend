import TransitionEffect from "@/components/TransitionEffect";
import React from "react";
import Head from "next/head";
import { motion, useScroll } from "framer-motion";
type Props = {
  name: string;
  x: string;
  y: string;
};
const Skill = (props: Props) => {
  return (
    <motion.div
      className="absolute select-none bg-black text-white font-thin rounded-full p-2"
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: props.x, y: props.y }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      transition={{ duration: 1 }}
    >
      {props.name}
    </motion.div>
  );
};
const About = (props: Props) => {
  const ref = React.useRef(null);
  const a = true;
  const [axis, setAxis] = React.useState({
    nodejs: {
      x: "0vw",
      y: "0vh",
    },
    aws: {
      x: "-0vw",
      y: "-0vh",
    },
    reactNative: {
      x: "-0vw",
      y: "-0vh",
    },
    nextjs: {
      x: "0vw",
      y: "-0vh",
    },
    rust: {
      x: "0vw",
      y: "-0vh",
    },
    threejs: {
      x: "-0vw",
      y: "0vh",
    },
    machineLearning: {
      x: "-0vw",
      y: "0vh",
    },
    framerMotion: {
      x: "0vw",
      y: "0vh",
    },
  });

  const { scrollYProgress } = useScroll({ container: ref });
  var radius = [14.1, 20];
  var angle = [52, 225, 142, 315, 90, 180, 20, 270];
  var i = 0,
    j = 0;
  var object: any = {};

  React.useEffect(() => {
    const y = 1
    i = 0
    j = 0
      angle = angle.map((a) => a + y);

      for (const [key, value] of Object.entries(axis)) {
        if (i == 4) {
          j = 1;
        }
        var a = radius[j] * Math.sin((Math.PI * 2 * angle[i]) / 360);
        var b = radius[j] * Math.cos((Math.PI * 2 * angle[i]) / 360);
        i++;

        object = { ...object, [key]: { x: `${a}vw`, y: `${b}vh` } };

        setAxis(object);
      }
    scrollYProgress.on("change", (y) => {
      y = y * 4;
      i = 0
      j = 0
      angle = angle.map((a) => a + y);

      for (const [key, value] of Object.entries(axis)) {
        if (i == 4) {
          j = 1;
        }
        var a = radius[j] * Math.sin((Math.PI * 2 * angle[i]) / 360);
        var b = radius[j] * Math.cos((Math.PI * 2 * angle[i]) / 360);
        i++;

        object = { ...object, [key]: { x: `${a}vw`, y: `${b}vh` } };

        setAxis(object);
      }
    });
  }, []);
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Welcome to Spark Mesh, a dynamic software company that delivers cutting-edge technology solutions to businesses worldwide. At Spark Mesh, we strive to ignite innovation and enable businesses to thrive in the digital age."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex sm:flex-row flex-col">
        <TransitionEffect />
        <div className="sm:h-screen h-[50%] ml-[3vw] overflow-hidden w-screen sm:w-[50%] flex flex-col justify-center items-center">
          <motion.h2
            initial={{ y: 50, clipPath: "inset(0% 0% 100% 0% round 10px)" }}
            animate={{ y: 0, clipPath: "inset(0% 0% 0% 0% round 10px)" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            className="text-4xl  tracking-widest absolute top-[15vh] font-thin"
          >
            Tech Stack
          </motion.h2>
          <motion.div
            initial={{ width: 0, height: 0 }}
            whileInView={{ width: "47vw", height: "47vh" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            className="flex items-center justify-center rounded-full border-2 border-black"
          >
            <motion.div
              initial={{ width: 0, height: 0 }}
              whileInView={{ width: "37vw", height: "37vh" }}
              transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
              className="flex items-center justify-center rounded-full border-2 border-black"
            >
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "27vw", height: "27vh" }}
                transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
                className="flex items-center justify-center rounded-full border-2 border-black"
              >
                <motion.div
                  initial={{ width: 0, height: 0 }}
                  whileInView={{ width: "17vw", height: "17vh" }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
                  className="flex items-center justify-center rounded-full border-2 border-black"
                >
                  <motion.div
                    initial={{ width: 0, height: 0 }}
                    whileInView={{ width: "10vw", height: "10vh" }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
                    className="flex z-0 bg-black overflow-hidden text-white items-center justify-center rounded-full border-2 border-black"
                  >
                    Stack
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          {Object.entries(axis).map(([key, value]) => (
            <Skill x={value.x} y={value.y} name={key} />
          ))}
        </div>
        <div
          ref={ref}
          style={{}}
          className="h-screen pt-[25vh] flex flex-col justify-start items-center ml-[2vw] w-[50%] overflow-x-hidden overflow-scroll text-black"
        >
          <motion.h2
            initial={{ y: 50, clipPath: "inset(0% 0% 100% 0% round 10px)" }}
            animate={{ y: 0, clipPath: "inset(0% 0% 0% 0% round 10px)" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            className="text-4xl tracking-widest absolute top-[15vh] font-thin"
          >
            Overview
          </motion.h2>
         <div className="px-[2vw]">

         Welcome to Spark Mesh, a dynamic software company that delivers
          cutting-edge technology solutions to businesses worldwide. At Spark
          Mesh, we strive to ignite innovation and enable businesses to thrive
          in the digital age.
          <br />
          <br />
          Our team of talented developers, designers, and technology experts
          work tirelessly to develop custom software solutions that meet the
          unique needs and goals of our clients. We leverage the latest
          technologies and industry best practices to build software that drives
          efficiency, productivity, and growth.
         </div>
          
        </div>
      </main>
    </>
  );
};

export default About;
