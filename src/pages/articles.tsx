import ArticleCard from '@/components/ArticleCard';
import TransitionEffect from '@/components/TransitionEffect'
import React, { useEffect } from 'react'
import { AnimatePresence, motion,useScroll } from 'framer-motion';
import Image from 'next/image';
import LitIcon from "@/components/LitIcon";
type Props = {}

const Articles = (props: Props) => {
  const [preview, setPreview] = React.useState(false);
  const [articleIndex, setArticleIndex] = React.useState(0);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
  });
  const articles = [
    {
      title: "Next.js Server-Side Rendering Deep Dive",
      thumbnail: '/images/image1.jpg',
      shortDescription: "Explore advanced server-side rendering techniques in Next.js.",
      description: "In this in-depth tutorial, we'll delve into the world of server-side rendering (SSR) with Next.js. You'll learn how to implement dynamic data fetching, optimize performance with incremental static regeneration (ISR), and handle caching strategies. By mastering SSR, you'll unlock the full potential of Next.js for building high-performance web applications.",
    },
    {
      title: "TypeScript Advanced Types and Generics",
      thumbnail: '/images/image1.jpg',
      shortDescription: "Dive into advanced type system features and generics in TypeScript.",
      description: "Take your TypeScript skills to the next level by exploring advanced type system features, including conditional types, mapped types, and type inference. Additionally, we'll demystify the power of generics and guide you through practical examples that showcase their flexibility and reusability. Gain a deeper understanding of TypeScript's type system and improve your ability to write type-safe code.",
    },
    {
      title: "Mastering Complex Animations with Framer Motion",
      thumbnail: '/images/image1.jpg',
      shortDescription: "Learn advanced techniques for creating complex and interactive animations with Framer Motion.",
      description: "Unleash the full potential of Framer Motion by mastering advanced animation techniques. Discover how to orchestrate complex animations using keyframes, transitions, and staggered effects. Dive into gesture-based animations, physics-based animations, and hook into Framer Motion's animation lifecycle. Elevate your UI/UX to the next level with impressive and interactive animations.",
    },
    {
      title: "Building High-Performance Web Applications with Rust",
      thumbnail: '/images/image1.jpg',
      shortDescription: "Explore the speed and safety of Rust for web development.",
      description: "Rust's unique combination of high performance and memory safety makes it an excellent choice for building web applications. In this tutorial, we'll guide you through building a performant web server with Rust, leveraging async programming, handling requests, and interacting with databases. Discover the power of Rust for creating secure and efficient web applications.",
    },
    {
      title: "Go (Golang) Concurrency and Parallelism Deep Dive",
      thumbnail: '/images/image1.jpg',
      shortDescription: "Unlock the full potential of Go (Golang) with advanced concurrency and parallelism techniques.",
      description: "Go (Golang) shines when it comes to concurrency and parallelism. In this comprehensive tutorial, we'll explore Go's powerful concurrency primitives, including goroutines and channels. Learn how to build concurrent and parallel applications, handle synchronization, and leverage advanced techniques like worker pools and parallel processing. Take your Go applications to new heights of performance and scalability.",
    },
    // Add more blog objects here
  ];
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [cardVariants,setCardVariants] = React.useState({
    hover: {  backgroundColor: '#FFF888', },
    
  });
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    );
  }, []);
  return (
    <>
      <TransitionEffect/>
     
    <div className='w-screen overflow-hidden relative h-screen flex justify-center items-center'>
    <AnimatePresence>
        
       
     {  
     preview && (

          <motion.div
          variants={cardVariants}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            whileTap='hover'
           onTap={(e:MouseEvent,i)=>{
          
       
            setCardVariants({hover: {  backgroundColor: '#FFF', },})
            if(e.pageX>((width/100)*11) && e.pageX<((width/100)*89) && e.pageY>((height/100)*11) && e.pageY<((height/100)*89) )
            {
              setCardVariants({hover: {  backgroundColor: '#FFF', },})
              setPreview(true)
            }
            else{
              setCardVariants({hover: {  backgroundColor: '#000', },})
              
              setPreview(false)
            }
            
           
           }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5,ease: "easeInOut" }}
            className="absolute z-50 bg-opacity-80  top-0  p-2  w-screen   h-screen   bg-white  flex flex-col justify-center items-center"
          ><div
        
         style={{zIndex:1}}
          className='w-[80%] lg:w-[800px] h-[700px]  overflow-y-scroll overflow-x-hidden  flex flex-col justify-start items-center space-y-4  bg-gradient-to-l from-gray-600 to-gray-900 rounded-lg  shadow-md shadow-black  px-3 py-4 text-center '
          >
            
            <h1 className="text-2xl text-white font-bold">{articles[articleIndex].title}</h1>
            <p className="text-lg text-white">{articles[articleIndex].shortDescription}</p>
          <Image
              alt="preview"
              className="rounded-lg w-full object-cover"
              src={articles[articleIndex].thumbnail}
              height={200}
              width={400}

            ></Image>  
            <p className="text-md text-white">{articles[articleIndex].description}</p>
            </div>
          </motion.div>
     )}
      </AnimatePresence>
    <motion.h2
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
            Words Can Change The World!
          </motion.h2>
         
      <motion.div
     ref={ref}
      style={{boxShadow:'0px 0px 10px 0px #808080'}}
     
      className="overflow-y-scroll  overflow-x-hidden h-[60%] px-2 rounded-lg pt-1.5 pb-4 sm:w-[57%] w-[70%]   flex flex-row justify-center items-start">
        <LitIcon scrollYProgress={scrollYProgress} />
        <div
        className="grid sm:grid-cols-2 grid-cols-1  gap-2 "
        >
        {articles.map((article, index)  => (
          <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6,delay:index*0.2 }}
          onTap={() => {
            if (preview && articleIndex === index) {
              setPreview(false);
              
            }else{
            setPreview(true);}
            setArticleIndex(index);
          }}
          
        >
          <ArticleCard key={index} title={article.title} thumbnail={article.thumbnail} shortDescription={article.shortDescription} description={article.description} />
        </motion.div>
        ))}</div>

      </motion.div>
      
      </div></>
  )
}

export default Articles