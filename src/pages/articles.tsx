import ArticleCard from '@/components/ArticleCard';
import TransitionEffect from '@/components/TransitionEffect'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
type Props = {}

const Articles = (props: Props) => {
  const [preview, setPreview] = React.useState(false);
  const [articleIndex, setArticleIndex] = React.useState(0);
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
  
  return (
    <>
      <TransitionEffect/>
      <AnimatePresence>
        
        {preview && (
          <motion.div
            initial={{ x: "80vw" }}
            animate={{ x: "0vw" }}
            whileHover={{ height: "100vh",top:0 }}
            exit={{ x: "80vw" }}
            transition={{ duration: 0.5 }}
            className="absolute z-50 rounded-lg top-[20vh] p-2 right-0 w-[25vw]  transition- h-[60vh] overflow-y-scroll overflow-x-hidden border-2 border-gray-500 bg-gray-900  flex flex-col justify-start items-center"
          >
            
            <h1 className="text-2xl text-white font-bold">{articles[articleIndex].title}</h1>
            <p className="text-lg text-white">{articles[articleIndex].shortDescription}</p>
          <Image
              alt="preview"
              className="rounded-lg w-[25vw] my-2"
              src={articles[articleIndex].thumbnail}
              height={100}
              width={200}

            ></Image>  
            <p className="text-md text-white">{articles[articleIndex].description}</p>
            
          </motion.div>
        )}
      </AnimatePresence>
    <div className='w-screen  relative h-screen flex justify-center items-center'>
    <motion.h2
            initial={{ x: 50, clipPath: "inset(0% 0% 100% 0% round 10px)", rotate:-90 }}
            animate={{ x: 0, clipPath: "inset(0% 0% 0% 0% round 10px)", rotate:-90 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            className="text-2xl -left-[3vw] tracking-widest absolute  font-thin"
          >
            Words Can Change The World!
          </motion.h2>
          <AnimatePresence >
      <motion.div
      initial={{ height:"60vh",translateY:'0vh',paddingTop:'2vh' }}
      whileHover={{ height:"75vh",translateY:'7.5vh',paddingTop:'2vh' }}
      exit={{ height:"60vh",translateY:'0vh',paddingTop:'0vh' }}
      transition={{ duration: 0.5 }}
      style={{boxShadow:'0px 0px 10px 0px #808080'}}
     
      className='overflow-y-scroll overflow-x-hidden   rounded-lg  p-4   w-[70%] grid grid-cols-3 gap-2 justify-center items-start'>
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
        ))}

      </motion.div></AnimatePresence>
      
      </div></>
  )
}

export default Articles