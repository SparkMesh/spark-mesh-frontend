import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {}
const MotionLink = motion(Link)
const Logo = (props: Props) => {
  return (
    <motion.div 
    
    animate={{ 
      boxShadow: ['5px 0px 20px 0px rgba(0,0,0,0.75)','0px 5px 20px 0px rgba(253,29,29,1)','-5px 0px 20px 0px rgba(131,58,180,1)','0px -5px 20px 0px rgba(252,176,69,1)','5px 0px 20px 0px rgba(0,0,0,0.75)'],
     }}
      transition={{ repeat:Infinity ,
      duration: 2,
      ease: "easeInOut",
  
     }}
  
    className='absolute z-50 sm:left-[47vw] left-[40.5vw] -top-[1vh] border-2 flex justify-center items-center border-white rounded-full p-8'>
        <MotionLink 
        
    whileHover={{ 
       
        transition: { duration: 1.5,repeat: Infinity },
        backgroundColor: ['#121212','rgba(131,58,180,1)','rgba(253,29,29,1)','rgba(252,176,69,1)','rgba(131,58,180,1)','#121212'],
        
    }}
    href='/'
    className='text-white absolute bg-black p-5  rounded-full   text-bold '
    >SM
    </MotionLink></motion.div>
  )
}

export default Logo