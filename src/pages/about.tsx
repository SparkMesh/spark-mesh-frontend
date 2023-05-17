import TransitionEffect from '@/components/TransitionEffect'
import React from 'react'
import { motion } from 'framer-motion'
type Props = {
  name: string,
  x: string,
  y: string,
}
const Skill = (props: Props) => {
  return (<motion.div
  className='absolute bg-black text-white shadow-xl font-thin rounded-full p-2'
  initial={{x:0,y:0}}
  whileInView={{x:props.x,y:props.y}}
  transition={{duration:1,delay:0.4,ease:'easeInOut'}}
  >{props.name}</motion.div>)
}
const About = (props: Props) => {
  return (
    <div className='flex flex-row'>
      <TransitionEffect/>
      <div className='h-screen w-[50%] flex flex-col justify-center items-center'>
        <motion.h2
        className='text-4xl tracking-widest absolute top-[10vh] font-thin'
        >Skills</motion.h2
        
        >
        <motion.div
        initial={{ width: 0,height:0 }}
        whileInView={{ width: "50vw",height:"50vh" }}
        transition={{ duration: 1,delay:0.4,ease: "easeInOut" }}
        
        className='flex items-center justify-center rounded-full border-2 border-black'>
<motion.div
 initial={{ width: 0,height:0 }}
 whileInView={{ width: "40vw",height:"40vh" }}
 transition={{ duration: 1,delay:0.4,ease: "easeInOut" }}
 
 className='flex items-center justify-center rounded-full border-2 border-black'
>

<motion.div
 initial={{ width: 0,height:0 }}
 whileInView={{ width: "30vw",height:"30vh" }}
 transition={{ duration: 1,delay:0.4,ease: "easeInOut" }}
 
 className='flex items-center justify-center rounded-full border-2 border-black'
>
<motion.div
 initial={{ width: 0,height:0 }}
 whileInView={{ width: "20vw",height:"20vh" }}
 transition={{ duration: 1,delay:0.4,ease: "easeInOut" }}
 
 className='flex items-center justify-center rounded-full border-2 border-black'>
<motion.div
 initial={{ width: 0,height:0 }}
 whileInView={{ width: "10vw",height:"10vh" }}
 transition={{ duration: 1,delay:0.4,ease: "easeInOut" }}
 
 className='flex bg-black overflow-hidden text-white items-center justify-center rounded-full border-2 border-black'
>Stack</motion.div>
</motion.div>
</motion.div>
</motion.div>
        </motion.div>

<Skill x='10vw' y='10vh' name='NodeJs'/>
<Skill x='-10vw' y='-10vh' name='AWS'/>
<Skill x='-10vw' y='-20vh' name='React Native'/>
<Skill x='10vw' y='-20vh' name='NextJs'/>
<Skill x='10vw' y='-10vh' name='Rust'/>
<Skill x='-10vw' y='10vh' name='ThreeJs'/>
<Skill x='10vw' y='20vh' name='Framer Motion'/>
<Skill x='-10vw' y='20vh' name='Machine Learning'/>

        </div>
        <div
        style={{}}
        className='h-screen w-[50%] overflow-scroll text-black'>

        </div>
        </div>
  )
}

export default About