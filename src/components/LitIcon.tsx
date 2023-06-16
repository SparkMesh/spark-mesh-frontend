import React from 'react'
import {motion,useScroll,MotionValue} from 'framer-motion'
type Props = {
    reference:React.MutableRefObject<null>
}
interface CircleProps {
    scrollYProgress: MotionValue<number>;
  }

const LitIcon = (props: Props) => {
    const { scrollYProgress } = useScroll({
        target:props.reference,offset:["center end",'center center']
    })
    console.log(scrollYProgress)
  return (
    <figure>
        <svg
        width={75} height={75} viewBox="0 0 100 100"
        >
<circle cx="75" cy="50" r="20" className='stroke-yellow-400 stroke-1 fill-none' />
<circle cx="75" cy="50" r="20" className='stroke-[5px] fill-light' style={{
    
    pathLength: scrollYProgress as Properties<string | number, string & {}>,
}} />
<circle cx="75" cy="50" r="20" className='animate-pulse stroke-1 fill-slate-500' />

        </svg>
    </figure>
  )
}

export default LitIcon