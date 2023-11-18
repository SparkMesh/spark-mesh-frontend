import TransitionEffect from "@/components/TransitionEffect";
import React, { useEffect } from "react";
import LitIcon from "@/components/LitIcon";
import Head from "next/head";
import { useRef } from "react";
import {
  MotionValue,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
} from "framer-motion";
import Card from "@/components/Card";

type Props = {
  name: string;
  x: string;
  y: string;
};

const Details = () => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-60% mx-auto flex flex-col items-center justify-center"
    ></li>
  );
};

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 5000 });
  const isInView = useInView(ref, { once: true });
  React.useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
  React.useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
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
  
 const [width, setWidth] = React.useState(0);
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
  const ref = React.useRef<HTMLDivElement>(null);
  const ref_main = useRef<HTMLDivElement>(null);
  const { scrollYProgress : scrollYProgress_main} = useScroll({ container: ref_main });
 const { scrollYProgress } = useScroll({ container: ref})

  
  var radius = [10, 15];
  var angle = [52, 225, 142, 315, 90, 180, 20, 270];
  var i = 0,
    j = 0;
  var object: any = {};

  React.useEffect(() => {
    setWidth(window.innerWidth)
   window.addEventListener("resize",()=>{
setWidth(window.innerWidth)
   })
    
    width > 768 ? (radius = [10, 15]) : (radius = [10, 15]);
    const y = 1;
    i = 0;
    j = 0;
    angle = angle.map((a) => a + y);

    for (const [key, value] of Object.entries(axis)) {
      if (i == 4) {
        j = 1;
      }
      var a = radius[j] * Math.sin((Math.PI * 2 * angle[i]) / 360);
      var b = radius[j] * Math.cos((Math.PI * 2 * angle[i]) / 360);
      i++;

      object = { ...object, [key]: { x: `${a}vh`, y: `${b}vh` } };

      setAxis(object);
    }
    scrollYProgress_main.on("change", (y) => {
     console.log(y);
      y = y * 4;
      i = 0;
      j = 0;
      angle = angle.map((a) => a + y);

      for (const [key, value] of Object.entries(axis)) {
        if (i == 4) {
          j = 1;
        }
        var a = radius[j] * Math.sin((Math.PI * 2 * angle[i]) / 360);
        var b = radius[j] * Math.cos((Math.PI * 2 * angle[i]) / 360);
        i++;

        object = { ...object, [key]: { x: `${a}vh`, y: `${b}vh` } };

        setAxis(object);
      }
    });
    scrollYProgress.on("change", (y) => {
      console.log(y);
       y = y * 4;
       i = 0;
       j = 0;
       angle = angle.map((a) => a + y);
 
       for (const [key, value] of Object.entries(axis)) {
         if (i == 4) {
           j = 1;
         }
         var a = radius[j] * Math.sin((Math.PI * 2 * angle[i]) / 360);
         var b = radius[j] * Math.cos((Math.PI * 2 * angle[i]) / 360);
         i++;
 
         object = { ...object, [key]: { x: `${a}vh`, y: `${b}vh` } };
 
         setAxis(object);
       }
     });
  }, []);
  return (
    <main>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content=" A dynamic software company that delivers cutting-edge technology
          solutions to businesses worldwide. At SparkMesh, we strive to ignite
          innovation and enable businesses to thrive in the digital age."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
    //ref={ ref_main }
      className="flex sm:flex-row flex-col  px-[10vw] justify-center items-center ">
        <TransitionEffect />
       
        <div
         
        className="h-screen ml-[3vw] overflow  relative w-[50%] flex flex-col justify-center items-center">
          <motion.h2
            initial={{ y: 50, clipPath: "inset(0% 0% 100% 0% round 10px)" }}
            animate={{ y: 0, clipPath: "inset(0% 0% 0% 0% round 10px)" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            className="text-4xl  tracking-widest absolute top-[13vh] font-thin"
          >
            TechStack
          </motion.h2>
<div
className="sticky  sm:top-auto top-[125px] flex flex-col justify-center items-center"
>
          <motion.div
            initial={{ width: 0, height: 0 }}
            whileInView={{ width: "270px", height: "270px" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            className="flex items-center justify-center rounded-full border-2 border-black"
          >
            <motion.div
              initial={{ width: 0, height: 0 }}
              whileInView={{ width: "200px", height: "200px" }}
              transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
              className="flex items-center justify-center rounded-full border-2 border-black"
            >
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "130px", height: "130px" }}
                transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
                className="flex items-center justify-center rounded-full border-2 border-black"
              >
                <motion.div
                  initial={{ width: 0, height: 0 }}
                  whileInView={{ width: "70px", height: "70px" }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
                  className="flex items-center justify-center rounded-full border-2 border-black"
                >
                  <motion.div
                    initial={{ width: 0, height: 0 }}
                    whileInView={{ width: "50px", height: "50px" }}
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
            <Skill key={key} x={value.x} y={value.y} name={key} />
          ))}
          </div>
          <div className="sm:bottom-0 bottom-[8vh] p-5 absolute flex flex-row gap-10">
            <div className="flex flex-col justify-center items-center">
              <span className="text-5xl font-bold">
                <AnimatedNumbers value={4} />+
              </span>
              <h2 className="font-extralight">SATISFIED CLIENTS</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-5xl font-bold">
                <AnimatedNumbers value={8} />+
              </span>
              <h2 className="font-extralight">PROJECTS COMPLETED</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-5xl font-bold">
                <AnimatedNumbers value={2} />+
              </span>
              <h2 className="font-extralight">YEARS OF EXPERIENCE</h2>
            </div>
          </div>
        </div>

        <div
        // 
          className="h-screen pt-[25vh] relative flex flex-col justify-start items-center ml-[2vw] sm:w-[50%] "
        >
          <motion.h2
            initial={{ y: 50, clipPath: "inset(0% 0% 100% 0% round 10px)" }}
            animate={{ y: 0, clipPath: "inset(0% 0% 0% 0% round 10px)" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            className="text-4xl tracking-widest absolute top-[13vh] font-thin"
          >
            Overview
          </motion.h2>

          <div
        ref={ref }
            className="flex flex-col items-center  text-lg overflow-x-hidden overflow-y-scroll px-[1.5vw]  mb-5"
          ><div className="  flex flex-col items-center">
            
            <p className="font-extrabold text-xl  font-mono">SparkMesh</p>{" "}
            A dynamic software company that delivers cutting-edge technology
            solutions to businesses worldwide. At SparkMesh, we strive to ignite
            innovation and enable businesses to thrive in the digital age.
            </div>
            
            {/* //<LitIcon reference={reference} /> */}
            <motion.div
            

            className="flex flex-col gap-[2vh] pt-[20px] pb-[100px] ">
              <motion.div className="flex justify-center font-extrabold text-xl  font-mono">Our Services</motion.div>
            <Card
              icon={
                <svg fill="#ffffff"
                  enableBackground="new 0 0 300 300"
                  viewBox="0 0 300 300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m164.804 62.461c2.478-.344 4.207-2.632 3.863-5.11s-2.632-4.207-5.11-3.862c-2.478.344-4.207 2.632-3.862 5.11.344 2.477 2.632 4.206 5.109 3.862z"></path>
                    <path d="m86 44c2.209 0 4-1.789 4-4v-12c0-2.209-1.791-4-4-4s-4 1.791-4 4v12c0 2.211 1.791 4 4 4z"></path>
                    <path d="m86 52c-2.209 0-4 1.789-4 4v12c0 2.211 1.791 4 4 4s4-1.789 4-4v-12c0-2.211-1.791-4-4-4z"></path>
                    <path d="m66 52h12c2.209 0 4-1.789 4-4s-1.791-4-4-4h-12c-2.209 0-4 1.789-4 4s1.791 4 4 4z"></path>
                    <path d="m94 52h12c2.209 0 4-1.789 4-4s-1.791-4-4-4h-12c-2.209 0-4 1.789-4 4s1.791 4 4 4z"></path>
                    <path d="m270 268h-80.983l-5.714-20h64.177c12.418 0 22.52-10.102 22.52-22.52v-126.96c0-12.418-10.102-22.52-22.52-22.52h-186.96c-12.418 0-22.52 10.102-22.52 22.52v126.953c0 10.595 7.471 19.589 17.516 21.894l2.064 20.633h-27.58c-2.209 0-4 1.789-4 4s1.791 4 4 4h240c2.209 0 4-1.789 4-4s-1.791-4-4-4zm-89.302 0h-49.397l5.714-20h37.968zm-82.278 0 .8-8h4.696c5.561 0 10.084-4.523 10.084-10.086v-1.914h14.698l-5.715 20zm5.496-32c1.148 0 2.084.938 2.084 2.086v1.914h-4.78l.4-4zm-3.496 12h5.58v1.914c0 1.148-.936 2.086-2.084 2.086h-3.896zm-39.9-164h186.96c8.006 0 14.52 6.512 14.52 14.52v113.48h-216v-113.48c0-8.008 6.514-14.52 14.52-14.52zm-14.52 141.473v-5.473h216v5.48c0 8.008-6.514 14.52-14.52 14.52h-133.48v-1.914c0-5.562-4.523-10.086-10.084-10.086h-5.916-4-36c-1.131 0-2.207.477-2.965 1.316-.76.836-1.127 1.957-1.016 3.082l.632 6.318c-5.096-2.278-8.651-7.377-8.651-13.243zm19.619 42.527-3.199-32h31.16l-3.199 32z"></path>
                    <path d="m155.596 236.233c3.378 0 6.116-2.739 6.116-6.116 0-3.378-2.739-6.116-6.116-6.116-3.378 0-6.117 2.738-6.117 6.116 0 3.377 2.739 6.116 6.117 6.116z"></path>
                    <path d="m114 208c11.974 0 22.987-5.238 30.612-14.354 4.193 1.497 8.687 2.354 13.388 2.354 4.116 0 8.135-.622 12-1.84v7.645c0 1.711 1.09 3.234 2.713 3.785.422.145.857.215 1.287.215 1.217 0 2.398-.559 3.17-1.562l12.494-16.243h21.314c1.676 0 3.174-1.047 3.754-2.617.578-1.574.115-3.34-1.16-4.43l-17.034-14.51c.918-3.396 1.462-6.89 1.462-10.443 0-22.055-17.943-40-40-40-2.416 0-4.77.251-7.068.664-6.029-14.465-20.308-24.664-36.932-24.664-22.057 0-40 17.945-40 40 0 6.469 1.578 12.564 4.317 17.976-2.809 5.552-4.317 11.767-4.317 18.024 0 22.055 17.943 40 40 40zm0-8c-17.645 0-32-14.355-32-32 0-3.464.587-6.807 1.649-10.017 7.342 8.563 18.213 14.017 30.351 14.017 2.416 0 4.77-.251 7.068-.664 3.259 7.819 8.947 14.356 16.097 18.744-6.018 6.343-14.275 9.92-23.165 9.92zm73.695-20c-1.242 0-2.414.578-3.17 1.562l-6.525 8.48v-28.882l22.115 18.84zm-29.695-56c17.645 0 32 14.355 32 32 0 1.542-.124 3.071-.341 4.583l-13.065-11.129c-1.188-1.008-2.852-1.238-4.271-.586-1.416.656-2.322 2.074-2.322 3.633v33.139c-3.813 1.546-7.84 2.361-12 2.361-12.969 0-24.138-7.77-29.158-18.887 14.721-5.911 25.157-20.305 25.157-37.114 0-2.603-.269-5.142-.746-7.608 1.553-.233 3.129-.392 4.746-.392zm-32 32c0-13.211 8.049-24.575 19.5-29.454.307 1.776.5 3.591.5 5.454 0 13.211-8.049 24.575-19.5 29.454-.307-1.777-.5-3.591-.5-5.454zm-12-56c12.969 0 24.138 7.769 29.158 18.887-14.722 5.909-25.158 20.304-25.158 37.113 0 2.603.269 5.142.746 7.608-1.553.233-3.129.392-4.746.392-17.645 0-32-14.355-32-32s14.355-32 32-32z"></path>
                  </g>
                </svg>
              }
              title="Custom website"
              description="We develop creative and dynamic custom websites matching your business goals."
            />
            <Card
              icon={
                <svg fill="#ffffff"
                  enableBackground="new 0 0 300 300"
                  viewBox="0 0 300 300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m260 197.907h-8.08c-1.714-42.685-30.743-79.928-71.92-91.959v-16.041c0-.06-.031-.109-.034-.168-.019-.442-.096-.88-.263-1.301-.014-.036-.018-.075-.033-.11-.004-.009-.004-.019-.008-.028l-11.711-26.684-12.354-25.455c-1.336-2.758-5.859-2.758-7.195 0l-12.418 25.594-11.646 26.545c-.004.009-.004.019-.008.028-.015.036-.019.075-.033.111-.167.421-.244.858-.262 1.3-.003.059-.034.109-.034.169v16.043c-41.182 12.034-70.209 49.261-71.92 91.957h-12.081c-2.209 0-4 1.791-4 4v48c0 2.209 1.791 4 4 4h84v2.514c0 5.23 4.256 9.486 9.486 9.486h37.027c5.23 0 9.486-4.256 9.486-9.486v-2.514h80c2.209 0 4-1.791 4-4v-48c.001-2.21-1.79-4.001-3.999-4.001zm-136 0h-23.848c1.24-16.309 10.075-30.892 23.848-39.711zm8-104h8.486v92c0 2.209 1.791 4 4 4s4-1.791 4-4v-92h8v77.455c0 2.209 1.791 4 4 4s4-1.791 4-4v-77.455h7.514v91.262c0 2.209 1.791 4 4 4s4-1.791 4-4v-26.97c13.77 8.82 22.608 23.404 23.848 39.708h-71.848zm20-46.84 5.969 12.295h-11.936zm-9.744 20.295h19.485l8.136 18.545h-35.754zm28.258 190.545h-37.027c-.82 0-1.486-.666-1.486-1.486v-2.514h40v2.514c-.001.82-.667 1.486-1.487 1.486zm85.486-12h-12v-12c0-2.209-1.791-4-4-4s-4 1.791-4 4v12h-8v-8c0-2.209-1.791-4-4-4s-4 1.791-4 4v8h-8v-12c0-2.209-1.791-4-4-4s-4 1.791-4 4v12h-8v-8c0-2.209-1.791-4-4-4s-4 1.791-4 4v8h-8v-12c0-2.209-1.791-4-4-4s-4 1.791-4 4v12h-8v-8c0-2.209-1.791-4-4-4s-4 1.791-4 4v8h-8v-12c0-2.209-1.791-4-4-4s-4 1.791-4 4v12h-8v-8c0-2.209-1.791-4-4-4s-4 1.791-4 4v8h-8v-12c0-2.209-1.791-4-4-4s-4 1.791-4 4v12h-8v-8c0-2.209-1.791-4-4-4s-4 1.791-4 4v8h-8v-12c0-2.209-1.791-4-4-4s-4 1.791-4 4v12h-8v-8c0-2.209-1.791-4-4-4s-4 1.791-4 4v8h-16v-40h12c2.209 0 4-1.791 4-4 0-40.01 26.151-75.437 64-87.56v34.529c-19.751 10.46-32 30.688-32 53.031 0 2.209 1.791 4 4 4h112c2.209 0 4-1.791 4-4 0-22.336-12.249-42.573-32-53.033v-34.53c37.847 12.125 64 47.559 64 87.563 0 2.209 1.791 4 4 4h8z"></path>
                    <circle cx="56" cy="217.907" r="4"></circle>
                    <path d="m243.516 138.392c.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172l2.828-2.828 2.828 2.828c.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172c1.562-1.562 1.562-4.094 0-5.656l-2.828-2.828 2.828-2.828c1.562-1.562 1.562-4.094 0-5.656s-4.094-1.562-5.656 0l-2.828 2.827-2.828-2.828c-1.562-1.562-4.094-1.562-5.656 0s-1.562 4.094 0 5.656l2.828 2.828-2.828 2.828c-1.563 1.563-1.563 4.094 0 5.657z"></path>
                    <circle cx="232" cy="77.907" r="4"></circle>
                    <path d="m66 105.907c7.719 0 14-6.281 14-14s-6.281-14-14-14-14 6.281-14 14 6.281 14 14 14zm0-20c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                  </g>
                </svg>
              }
              title="UI/UX design"
              description="Crafting captivating user experiences with stunning UI/UX designs that leave a lasting impression."
            />
            <Card
              icon={
                <svg
                  fill="#ffffff"
                  enableBackground="new 0 0 300 300"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g>
                      <path d="m512 348.29c0-67.987-55.249-123.85-123.85-123.85-41.498 0-78.292 20.518-100.777 51.939h-156.178v-30.014c0-9.603-7.812-17.415-17.415-17.415h-35.474c-9.603 0-17.415 7.812-17.415 17.415v30.014h-8.534c-20.632 0-37.417-16.785-37.417-37.417v-55.847c0-20.632 16.786-37.417 37.417-37.417h354.298c20.632 0 37.418 16.785 37.418 37.417v33.807c0 4.126 3.344 7.47 7.47 7.47s7.47-3.344 7.47-7.47v-33.807c0-28.869-23.488-52.357-52.358-52.357h-77.534v-32.402c0-32.254-26.241-58.495-58.495-58.495h-82.239c-32.255 0-58.495 26.241-58.495 58.495v32.403h-77.535c-28.869-.001-52.357 23.487-52.357 52.356v221.529c0 28.87 23.488 52.358 52.357 52.358h238.752c4.126 0 7.47-3.344 7.47-7.47s-3.344-7.47-7.47-7.47h-238.752c-20.632 0-37.417-16.786-37.417-37.418v-129.11c9.512 9.73 22.768 15.785 37.417 15.785h8.534v7.593c0 19.382 15.769 35.151 35.152 35.151s35.152-15.769 35.152-35.151v-7.593h147.012c-8.879 17.065-13.906 36.441-13.906 56.971 0 68.004 55.266 123.85 123.85 123.85 68.525 0 123.849-55.796 123.849-123.85zm-227.866-217.532h-109.255v-32.402c0-7.449 6.06-13.508 13.508-13.508h82.239c7.449 0 13.508 6.06 13.508 13.508zm-139.302-32.402c0-24.017 19.539-43.555 43.555-43.555h82.239c24.017 0 43.555 19.539 43.555 43.555v32.403h-15.107v-32.403c0-15.686-12.762-28.448-28.448-28.448h-82.239c-15.686 0-28.448 12.762-28.448 28.448v32.403h-15.107zm-66.526 145.534h35.474c1.365 0 2.475 1.111 2.475 2.475v11.452h-40.424v-11.452c0-1.365 1.111-2.475 2.475-2.475zm37.949 55.022c0 11.145-9.067 20.211-20.212 20.211s-20.212-9.066-20.212-20.211v-26.156h40.423v26.156zm369.438 97.782c-9.525-2.698-21.429-4.923-34.986-6.592 4.985-26.767 4.994-56.809 0-83.625 13.557-1.669 25.461-3.894 34.986-6.592 7.27 14.59 11.368 31.026 11.368 48.404-.001 17.379-4.099 33.815-11.368 48.405zm-53.428-103.379c-11.506.941-23.875 1.518-36.645 1.681v-54.341c19.116 6.459 31.11 33.253 36.645 52.66zm-51.585-52.705v54.386c-12.764-.163-25.126-.739-36.628-1.679 7.875-27.707 21.384-47.699 36.628-52.707zm-36.654 162.656c11.509-.941 23.881-1.519 36.655-1.681v54.374c-15.234-4.986-28.774-24.87-36.655-52.693zm51.594 52.659v-54.341c12.77.163 25.139.74 36.645 1.681-5.533 19.4-17.526 46.2-36.645 52.66zm0-69.282v-76.705c14.1-.171 27.63-.824 40.143-1.906 4.972 25.698 5.012 54.613 0 80.517-12.513-1.082-26.043-1.736-40.143-1.906zm82.182-100.115c-8.454 2.12-18.789 3.903-30.409 5.28-4.934-18.386-12.239-34.01-21.213-45.572 21.053 7.871 39.036 22.079 51.622 40.292zm-127.779-40.255c-8.921 11.508-16.202 27.078-21.128 45.534-11.616-1.378-21.947-3.16-30.397-5.279 12.567-18.185 30.514-32.376 51.525-40.255zm-59.415 53.614c9.526 2.698 21.431 4.923 34.991 6.592-1.578 8.517-2.693 17.504-3.28 26.878-.258 4.117 2.871 7.665 6.988 7.922 4.109.254 7.664-2.87 7.923-6.989.573-9.144 1.708-17.947 3.322-26.257 12.509 1.081 26.034 1.734 40.128 1.905v76.705c-14.095.171-27.619.824-40.129 1.905-1.263-6.528-2.243-13.358-2.879-20.442-.369-4.109-4.001-7.152-8.108-6.773-4.109.369-7.141 3.999-6.773 8.107.634 7.06 1.594 13.969 2.851 20.657-13.578 1.669-25.499 3.896-35.035 6.598-7.27-14.59-11.368-31.026-11.368-48.404.002-17.379 4.1-33.815 11.369-48.404zm7.891 110.165c8.472-2.125 18.832-3.91 30.482-5.289 4.266 15.867 11.017 32.535 21.132 45.578-21.05-7.872-39.03-22.078-51.614-40.289zm127.681 40.292c8.974-11.562 16.279-27.186 21.213-45.572 11.62 1.378 21.955 3.16 30.409 5.28-12.586 18.213-30.569 32.421-51.622 40.292z"></path>
                    </g>
                  </g>
                </svg>
              }
              title="Business Planning"
              description="Web design encompasses many different skills and disciplines in the production of all web."
            />
            </motion.div>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
