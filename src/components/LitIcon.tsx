import React from 'react'
import {motion,useScroll,MotionValue} from 'framer-motion'
type Props = {
    reference:React.MutableRefObject<null>
}


const LitIcon = (props: Props) => {
    const { scrollYProgress } = useScroll({
        target:props.reference,
        offset:["center end",'center center']
    })
    
  return (
    <figure className='absolute left-0 stroke-black'>
        <svg
        className='-rotate-90'
        width={75} height={75} viewBox="0 0 100 100"
        >
<circle cx="75" cy="50" r="20" className='stroke-yellow-400 stroke-1 fill-none' />
<motion.circle cx="75" cy="50" r="20" className='stroke-[5px] fill-white' 
 style={{
    pathLength: scrollYProgress,
}}
 />
<circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-yellow-400' />

        </svg>
    </figure>
  )
}

export default LitIcon