import React from 'react'
import {MotionValue, motion} from 'framer-motion'
type Props = {
    scrollYProgress:MotionValue<number>;
}


const LitIcon = ({scrollYProgress}:Props) => {
    
   
    
  return (
    <figure className='absolute bottom-[80%]  sm:bottom-0 sm:left-[45.5%] left-[33.9%] stroke-black'>
        <svg
        
        width={75} height={75} viewBox="0 0 100 100"
        >
<circle cx="75" cy="50" r="20" className='stroke-violet-700 stroke-[5px] fill-none' />
<motion.circle style={{pathLength:scrollYProgress}} cx="75" cy="50" r="15" className='stroke-[10px] fill-white' 
 
 />
<circle cx="75" cy="50" r="10" className=' stroke-1 fill-violet-700' />

        </svg>
    </figure>
  )
}

export default LitIcon