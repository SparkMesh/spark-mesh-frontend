import React from 'react'
import {motion } from 'framer-motion'
type Props = {}

const TransitionEffect = (props: Props) => {
  return (
    <>
    <motion.div
    className='fixed top-0 bottom-0 right-full bg-yellow-400 w-screen h-screen z-30'
    initial={{x:'100%',width:'100%'}}
    animate={{x:'0%',width:'0%'}}
    exit={{x:['0%','100%'],width:['0%','100%']}}
    transition={{duration:0.4, ease:'easeInOut'}}

    />
    <motion.div
    className='fixed top-0 bottom-0 right-full bg-gray-400 w-screen h-screen z-20'
    initial={{x:'100%',width:'100%'}}
    animate={{x:'0%',width:'0%'}}
    transition={{delay:0.1,duration:0.4, ease:'easeInOut'}}

    />
    <motion.div
    className='fixed top-0 bottom-0 right-full bg-purple-400 w-screen h-screen z-10'
    initial={{x:'100%',width:'100%'}}
    animate={{x:'0%',width:'0%'}}
    transition={{delay:0.2,duration:0.4, ease:'easeInOut'}}

    />
    </>
  )
}

export default TransitionEffect