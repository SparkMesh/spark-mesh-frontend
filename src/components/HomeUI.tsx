import React from 'react'
import avatar from './avatar.webp'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { LinkIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
type Props = {}

const HomeUI = (props: Props) => {
  const MotionLink = motion(Link)
  return (<div className='h-screen pt-10 flex flex-col gap-2 justify-center items-center'>
    <div className=' w-screen gap-2 flex flex-row justify-center items-center px-5 md:px-10 xl:px-20'>
      <motion.div
      initial={{x:-500}}
      animate={{x:0}}
      className='w-[50%] flex justify-end items-center'> 
      <Image src={avatar} height={350} width={350} alt='avatar' /></motion.div>
      <motion.div
      initial={{x:500}}
      animate={{x:0}}
      className='flex flex-col w-[50%]'> 
      <h1 className='text-4xl font-bold'>Hi, We're <span className='text-[#FFD700]'>SparkMesh</span></h1>
        <h2 className='text-2xl font-thin'>Building smarter software for a better tomorrow.</h2>
        <h3 className='text-lg'>Our team of talented developers, designers, and technology experts work tirelessly to develop custom software solutions that meet the unique needs and goals of our clients. We leverage the latest technologies and industry best practices to build software that drives efficiency, productivity, and growth.</h3></motion.div>
    </div>
    <div className='flex flex-row justify-center items-center m-2'>
      <motion.div
      initial={{x:-500}}
      animate={{x:0}}
      onClick={() => {
        console.log(window)
        window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf')
      }} className='flex flex-row justify-center items-center gap-2 cursor-pointer bg-black rounded-lg p-5 m-2 text-white font-semibold border-2 border-black hover:bg-white hover:text-black'>Company Portfolio <LinkIcon className="h-5 w-5 " /></motion.div>
      <MotionLink initial={{x:500}}
      animate={{x:0}} className='flex flex-row gap-2 justify-center items-center text-lg font-thin' href='mailto:sparkmeshtech@gmail.com'>Contact Us <ArrowRightIcon className='w-5 h-5' /></MotionLink>
    </div>
  </div>
  )
}

export default HomeUI