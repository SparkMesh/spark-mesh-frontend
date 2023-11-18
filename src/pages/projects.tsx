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
    name: "Project 1",
    shortDescription: "Short description for Project 1",
    image: "/images/image1.jpg",
    description: "This is the description for Project 1.",
    liveLink:'https://www.sparkmesh.tech/',
  
  },
  {
    name: "Project 2",
    shortDescription: "Short description for Project 2",
    image: "/images/image2.jpg",
    description: "This is the description for Project 2.",liveLink:'https://www.sparkmesh.tech/',
  },
  {
    name: "Project 3",
    shortDescription: "Short description for Project 3",
    image: "/images/image3.jpg",
    description: "This is the description for Project 3.",liveLink:'https://www.sparkmesh.tech/',
  },
  {
    name: "Project 4",
    shortDescription: "Short description for Project 4",
    image: "/images/image4.jpg",
    description: "This is the description for Project 4.",liveLink:'https://www.sparkmesh.tech/',
  },
  {
    name: "Project 5",
    shortDescription: "Short description for Project 5",
    image: "/images/image5.jpg",
    description: "This is the description for Project 5.",liveLink:'https://www.sparkmesh.tech/',
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
          className="text-2xl xl:left-[5px] lg:-left-[10px] md:-left-[50px]  sm:-left-[100px] -left-[160px] tracking-widest absolute  font-thin"
        >
          Imagination Trumps Knowledge!
        </motion.div>
        <motion.div
          ref={ref}
          
          className="overflow-y-scroll  overflow-x-hidden h-[60%] p-2  sm:w-[57%] w-[70%]   flex flex-row justify-center items-start"
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
