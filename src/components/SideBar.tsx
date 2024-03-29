import React, { useEffect } from "react";
import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";
import { useRouter } from "next/router";
type Props = {

};
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
      className={`${className}  relative group`}
    >
      {title}
      <span
        className={`h-[2px]  rounded-full inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      ></span>
    </Link>
  );
};
const SideBar = (props: Props) => {
  const controls = useAnimationControls();
  const [width, setWidth] = React.useState(0);
 
  useEffect(() => {

 setWidth(window.innerWidth);


window.addEventListener("resize", () => {
  console.log(window.innerWidth)

    return setWidth(window.innerWidth)
  
     
  
   
    })
}, []);

  return (
    <div
    style={{zIndex:50}} 
    >
      <div >
      <header 
        
      className="sm:absolute fixed z-40 sm:bottom-10 sm:top-auto top-3 sm:h-[10px]   w-screen sm:px-[4px] md:px-[12px]  lg:px-[45px] px-[5vw] py-[2vh]  font-medium  flex items-end justify-between">
       
       <CustomLink
         key={2}
         controls={controls}
         className="sm:-rotate-90  "
         href="/career"
         title="Careers"
       />
        <CustomLink
         key={1}
         controls={controls}
         className="sm:left-4  sm:-rotate-90 "
         href="/testimonials"
         title="Testimonials"
       />
     </header>

      </div>
      
      <motion.div
        initial={{height:0}}
        whileInView={{height:'50vh'}}
        transition={{duration:0.5, delay:1}}
        className='border-r-[0.3vw] absolute   bottom-0 left-[8%] sm:block hidden border-black'></motion.div>
        <motion.div
        initial={{height:0}}
        whileInView={{height:'50vh'}}
        transition={{duration:0.5, delay:1}}
        className='border-r-[0.3vw] absolute  bottom-0 right-[8%] sm:block hidden border-black'></motion.div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "50vh" }}
        transition={{ duration: 0.5, delay: 1 }}
        className="border-r-[0.3vw] absolute  top-0 left-[8%] sm:block hidden border-black"
      ></motion.div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "50vh" }}
        transition={{ duration: 0.5, delay: 1 }}
        className="border-r-[0.3vw] absolute  top-0 right-[8%] sm:block hidden border-black"
      ></motion.div>
      <div 
       style={
       
        {width:width<640 ? width-16 : (width/100)*8}}
      className="bg-slate-300 z-30  sm:m-0 m-2 sm:rounded-none rounded-lg fixed sm:z-0   top-0 sm:h-screen   h-[65px]"></div>
      <div 
      style={
       
        {width:width<640 ? width-16 : (width/100)*8}}
      className={`bg-slate-300 z-30 sm:m-0 m-2 sm:rounded-none sm:z-0  rounded-lg fixed sm:right-0 sm:top-0 bottom-0 sm:h-screen h-[65px]`}></div>
    </div>
  );
};

export default SideBar;
