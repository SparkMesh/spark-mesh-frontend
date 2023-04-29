import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
type Props = {}
const MotionLink = motion(Link)
const Logo = (props: Props) => {
  return (
    <motion.div 
    initial={{ scale: 0 }}
    animate={{ scale: 1,rotate: 360,transition: { duration: 1 } }}
   
    style={{boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)',

}}
    className='relative border-2 flex justify-center items-center border-white rounded-full p-8'>
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