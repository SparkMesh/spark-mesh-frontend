import TransitionEffect from "@/components/TransitionEffect";
import React, { useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import LitIcon from "@/components/LitIcon";
type Props = {
  preview: boolean;
  thumb: string;
};

const projects = [
  {
    name: "AI Image SaaS",
    shortDescription: "AI FineTune gen SaaS - SDXL1.0",
    image: "/images/image1.jpg",
    description: "This SaaS is built with NextJS 14, RadixUI, NextUI, Zod, Zustand,  SupaBase, PosgreSQL, Cloudinary & Sanity-io.",
    liveLink:'https://snapwiz.io/',
  
  },
  {
    name: "Ecommerce SaaS",
    shortDescription: "Single Click Deployed Ecommerce SaaS",
    image: "/images/image2.jpg",
    description: "Deploy multiple ecommerce store from a single dashboard",liveLink:'https://ecommerce-saas-landing-page.vercel.app/',
  },
  {
    name: "Food Delivery",
    shortDescription: "Multi Vendor Food Delivery System",
    image: "/images/image3.jpg",
    description: "Customer, Restaurant & Rider app on React Native and Dashboard with React - Vite",liveLink:'https://quickbhai.com/',
  },
  {
    name: "Children Care",
    shortDescription: "Children Care Management System - User App",
    image: "/images/image4.jpg",
    description: "Develop User App on Children Care MS on top off React Native, AsyncStorage and Animated Api.",liveLink:'https://www.figma.com/proto/2eBPvkH12LWqx8AvoO1Php/Tadika?page-id=0%3A1&type=design&node-id=470-19461',
  },
  {
    name: "Image Editor AI",
    shortDescription: "Short description for Project 5",
    image: "/images/image5.jpg",
    description: "Edit Images with AI filters and tools with Next.js, MongoDB and Cloudinary",liveLink:'https://shotify-io.vercel.app/',
  },
 
  {
    name: "Agency Portfolio",
    shortDescription: "Full-Stack Digital Agency Portfolio App",
    image: "/images/image6.jpg",
    description: "Full Stack Agency Portfolio App with Next.js 14 and Auth.",liveLink:'https://agency-portfolio-mu.vercel.app/',
  },
  {
    name: "Bloodbank App",
    shortDescription: "with Public APIs for landing page",
    image: "/images/image7.jpg",
    description: "A Blood bank app with landing page in Next.js and Management System with React, Ant Design and Express (MVC)",liveLink:'https://quickdonorbd.org/',
  },
];

const Projects = (props: Props) => {
  let ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
  });
  const [preview, setPreview] = React.useState(false);
  const [previewResP, setPreviewResP] = React.useState(false);
  const [projectIndex, setProjectIndex] = React.useState(-1);

  const [width, setWidth] = React.useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    }
    );
  


  }, []);


  return (
    <>
      <TransitionEffect />

      
      <div className="h-screen w-screen relative flex items-center  justify-center">
      <AnimatePresence>
        {" "}
        {preview || previewResP ? (
          <motion.div
          variants={{
            hidden: { x: "-100vw",
            
          },
            visible: { x: "0vw" },
           
          }}
          initial="hidden"
          animate={"visible" }
          style={{zIndex:100}}
           
            exit={{ x: "100vw",  }}
            transition={{ duration: 0.5,delay:0.3, ease: "easeInOut" }}
          
           
            className="fixed  p-1  top-[0vh] w-screen  right-0  bg-gray-400 bg-opacity-40 "
          >
            <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: `${width/2 - 150}px` }}
            exit={{ x: '100vw' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            >
            <Image
              alt="preview"
              className="rounded-xl  "
              src={projects[projectIndex]?.image}
              height={200}
              width={300}
            ></Image></motion.div>
            
            
          </motion.div>
        ): null}
      </AnimatePresence>
        <motion.div
          initial={{
            x: 50,
            clipPath: "inset(0% 0% 100% 0% round 10px)",
            rotate: -90,
          }}
          animate={{
            x: 0,
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            rotate: -90,
          }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          className="text-2xl xl:left-[5px] lg:-left-[10px] md:-left-[50px]  sm:-left-[100px] -left-[170px] tracking-widest absolute  font-thin"
        >
          Imagination Trumps Knowledge!
        </motion.div>
        <motion.div
          ref={ref}
          
          className="overflow-y-scroll  overflow-x-hidden h-[60%] p-2 xl:w-[720px] sm:w-[57%] w-[70%] bg-gray-100 rounded-xl  flex flex-row justify-center items-start"
        >
          <LitIcon scrollYProgress={scrollYProgress} />
          <div className="lg:grid lg:grid-cols-2 flex flex-col  gap-4 ">
          {projects.map((project,key) => {
           

return (
            <motion.div
           
              key={key}
              
            
              onTap={() => {
                setPreviewResP(key == projectIndex?!previewResP:true);
                if(key == projectIndex)
                {
                  setProjectIndex(-1);
                }else{
                setProjectIndex(key);
              }
              }}
            
              style={{ 
                borderRadius: "8px",
               
                backgroundColor: key == projectIndex ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.0)",
                scale: key == projectIndex ? 0.9:1,
                translateY: key == projectIndex ? 10 : 0
              ,transition: "all 0.15s "}}
           
              

            >
                <ProjectCard
                index = {key}
                key={key}
                  name={project.name}
                  shortDescription={project.shortDescription}
                  description={project.description}
                  thumbnail={project.image}
projectIndex={projectIndex}
                  liveLink={project.liveLink}
                />
             
              
            </motion.div> );
            })}
            
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
