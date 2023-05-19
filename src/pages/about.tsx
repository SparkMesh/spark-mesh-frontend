import TransitionEffect from '@/components/TransitionEffect'
import React from 'react'
import { motion,useScroll } from 'framer-motion'
type Props = {
  name: string,
  x: string,
  y: string,
}
const Skill = (props: Props) => {
  return (<motion.div
  className='absolute select-none bg-black text-white font-thin rounded-full p-2'
  initial={{x:0,y:0}}
  whileInView={{x:props.x,y:props.y}}
  whileHover={{scale:1.2,transition:{duration:0.2,ease:'easeInOut',}}}
  transition={{duration:1}}
  >{props.name}</motion.div>)
}
const About = (props: Props) => {
  const ref = React.useRef(null)
  
  const [axis, setAxis] = React.useState({
    nodejs:{
      x:'10vw',y:'10vh'
    },
  aws:{
    x:'-10vw',y:'-10vh'
  },
  reactNative:{
    x:'-10vw', y:'-20vh'
  },
  nextjs:{
    x:'10vw', y:'-20vh'
  },
  rust:{ 
    x:'10vw', y:'-10vh'
  },
  threejs:{
    x:'-10vw', y:'10vh'
  },
  machineLearning:{ 
    x:'-10vw' ,y:'20vh'
  },
  framerMotion:{
    x:'10vw', y:'20vh'
  },
  
})

  const { scrollYProgress } = useScroll({ container: ref})
  var radius = [14.1,20];
  var angle  = [52,225,142,315,90,180,20,270]
  var i=0,j=0
  var object:any = {}
   
  React.useEffect(() => {
   
    scrollYProgress.on('change', (y) => {
      y=y*4
      i=0,j=0
      angle=angle.map((a)=>a+y)
     
    
        for (const [key, value] of Object.entries(axis)) {
          
          if(i==4){j=1}
          var a = radius[j] * Math.sin(Math.PI * 2 * angle[i] / 360);
           var b = radius[j] * Math.cos(Math.PI * 2 * angle[i] / 360);
          i++
          
           object = {...object,[key]:{x:`${a}vw`,y:`${b}vh`}}
           
           setAxis(object)
        }
        
   

      
    })
  }, [])
  return (
    <div className='flex flex-row'>
      <TransitionEffect/>
      <div className='h-screen ml-[3vw] overflow-hidden w-[50%] flex flex-col justify-center items-center'>
        <motion.h2
        className='text-4xl tracking-widest absolute top-[15vh] font-thin'
        >Tech Stack</motion.h2
        
        >
        <motion.div
        initial={{ width: 0,height:0 }}
        whileInView={{ width: "47vw",height:"47vh" }}
        transition={{ duration: 1,delay:0.4,ease: "easeInOut" }}
        
        className='flex items-center justify-center rounded-full border-2 border-black'>
<motion.div
 initial={{ width: 0,height:0 }}
 whileInView={{ width: "37vw",height:"37vh" }}
 transition={{ duration: 1,delay:0.4,ease: "easeInOut" }}
 
 className='flex items-center justify-center rounded-full border-2 border-black'
>

<motion.div
 initial={{ width: 0,height:0 }}
 whileInView={{ width: "27vw",height:"27vh" }}
 transition={{ duration: 1,delay:0.4,ease: "easeInOut" }}
 
 className='flex items-center justify-center rounded-full border-2 border-black'
>
<motion.div
 initial={{ width: 0,height:0 }}
 whileInView={{ width: "17vw",height:"17vh" }}
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

<Skill x={axis.nodejs.x} y={axis.nodejs.y} name='NodeJs'/>
<Skill x={axis.aws.x} y={axis.aws.y} name='AWS'/>
<Skill x={axis.reactNative.x} y={axis.reactNative.y} name='React Native'/>
<Skill x={axis.nextjs.x} y={axis.nextjs.y} name='NextJs'/>
<Skill x={axis.rust.x} y={axis.rust.y} name='Rust'/>
<Skill x={axis.threejs.x} y={axis.threejs.y} name='ThreeJs'/>
<Skill x={axis.framerMotion.x} y={axis.framerMotion.y} name='Framer Motion'/>
<Skill x={axis.machineLearning.x} y={axis.machineLearning.y} name='Machine Learning'/>

        </div>
        <div
        ref={ref}
        style={{}}
        className='h-screen ml-[2vw] w-[50%] overflow-x-hidden overflow-scroll text-black'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium in cumque quibusdam excepturi voluptatem ratione architecto labore, dolor soluta quaerat consequuntur. Distinctio assumenda animi cupiditate eligendi sapiente voluptas fugiat magni vero, ut quos beatae ratione numquam quis ipsum earum! Quia labore laudantium amet sit illum similique illo maxime architecto, sint, asperiores repudiandae. Blanditiis, incidunt voluptatum aspernatur, nisi, eveniet esse dolore at doloremque aliquam non maiores pariatur officiis dignissimos! Doloremque amet error laborum corporis excepturi numquam officiis modi sapiente dolore deleniti ratione, pariatur explicabo! Magnam iure mollitia fugiat temporibus eum natus quis cupiditate, atque distinctio placeat incidunt excepturi fuga illo doloribus, numquam eaque dignissimos molestias vitae inventore similique rem repudiandae repellendus cum! Iusto commodi, dicta, illum accusamus deleniti culpa incidunt eveniet quos nisi voluptate tempora quam soluta eaque debitis consequatur aperiam? Nam eveniet, illum quia quasi accusamus quas dignissimos. Ipsum officia quas id provident, aliquid necessitatibus quaerat sapiente? Voluptas, cupiditate facere. Voluptate ab delectus sapiente a. Deleniti fuga, ab, vitae non autem ut molestias quisquam enim laborum eos recusandae qui sapiente numquam reprehenderit odit ipsa voluptatibus expedita possimus in nobis. Pariatur atque, reiciendis quo molestiae repellat hic temporibus ratione incidunt provident fugiat facere? Voluptates voluptas impedit nihil optio magni, autem debitis necessitatibus perspiciatis, dolorem quos laudantium adipisci, culpa facilis aspernatur repellendus. Saepe assumenda, suscipit placeat repellendus ducimus reprehenderit ipsum odit dicta voluptatibus quisquam fugit. Possimus nihil qui odit. Repudiandae ea accusamus odio quod, quidem rerum aliquam quam quibusdam labore voluptatum tenetur qui in inventore recusandae exercitationem asperiores dolorum fugiat nemo repellat consequatur, ipsam iste tempora omnis? Vel beatae delectus cumque maiores impedit deleniti ad ullam at et ducimus provident illum neque tempore blanditiis, incidunt soluta porro minima. Quo suscipit nulla obcaecati repudiandae! Labore, fugit sit facilis vitae accusamus debitis! Odit, quod molestias nostrum laborum, architecto earum pariatur explicabo provident ipsa sunt vero officia numquam consequuntur quas aliquid perspiciatis? Quos excepturi iste, nam suscipit ex dolorem dicta corporis nostrum cupiditate esse odio nulla veritatis sint iure necessitatibus amet harum earum perferendis! Reiciendis numquam magnam repellat officiis totam dolore odit reprehenderit tempora quibusdam! Deserunt iusto tenetur ipsum animi accusamus impedit, nemo alias, repudiandae error quidem vel commodi dignissimos. Earum temporibus commodi tenetur aliquid, delectus consequatur atque possimus cumque repellat provident modi, blanditiis cum sapiente dolores totam voluptate repellendus consectetur quos libero accusantium ipsum nulla. Beatae iure ex rem, pariatur error sunt qui in! Nobis cumque, expedita corrupti culpa dolores, quisquam molestiae modi neque obcaecati ex itaque labore esse adipisci. Reiciendis voluptas, iusto nemo, quam, corporis aspernatur officia quibusdam vitae ducimus non temporibus! Quae quibusdam minima corporis aperiam sint accusamus eius, commodi ullam. Eligendi consequatur pariatur, ipsam ea iste eius deserunt consequuntur velit! Corporis nemo sunt adipisci labore molestias dolorum! Aut quo, iste architecto sapiente molestias, culpa optio aliquid quod animi, sint exercitationem quidem? Praesentium veniam deserunt hic similique consequatur. Necessitatibus unde saepe, corporis repellat deserunt placeat perspiciatis fugiat, maxime, vero consequatur minima sint quia explicabo ullam distinctio qui excepturi iure at! Temporibus hic eligendi magnam accusantium voluptas amet. Adipisci minima officia placeat.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur corporis, alias libero id explicabo ipsa accusantium, voluptatibus fugiat doloremque laudantium iste? Vitae architecto repellat sed earum eos unde at, modi dicta debitis neque excepturi commodi nam magnam assumenda pariatur amet quo natus totam in quam exercitationem laborum tenetur provident fugit! Ea, blanditiis ipsum facilis, magnam quasi ab quam libero impedit ipsam eius atque, quae veritatis aperiam aspernatur veniam quos. Consectetur esse illo eaque tenetur nihil aspernatur laudantium consequuntur molestiae ipsam maxime, laborum quos. Non nesciunt, nemo facilis quaerat, modi minus suscipit amet repudiandae dolorum provident, perspiciatis at. Ducimus iure, assumenda totam architecto odio rerum vero minus illo laboriosam accusamus. Sit, eos odio similique provident autem asperiores velit, itaque minus reiciendis possimus fugiat, aliquam ad voluptatibus distinctio magnam natus dolore ut ratione fugit. Alias magni omnis saepe et corporis amet sint accusantium molestias nobis nostrum earum, aut placeat sunt sed ipsa vitae quod harum necessitatibus? Reiciendis odio tempora in, necessitatibus aliquam fugiat vel iusto neque eum rem quas porro fugit. Sunt dolor nam nisi quod, voluptatum tempore dolores nihil. Laborum fuga aperiam accusantium. Possimus reprehenderit deserunt quas mollitia officiis fugit expedita vero ut alias eius aperiam laborum optio odio, repellat vitae cumque, dolorum exercitationem qui quisquam eligendi molestiae quasi accusamus. Cumque, ipsa voluptatum exercitationem modi distinctio commodi dolorem laudantium nam, officia facilis non incidunt, labore pariatur tempore aspernatur. Officia, excepturi quidem, est doloribus iure dolorem placeat expedita minima dolorum sunt dignissimos, ut ipsa? Exercitationem, ad ab. Quod non esse aliquam consequatur, incidunt illum exercitationem commodi voluptatibus odio autem atque, voluptas nesciunt ullam aperiam expedita maxime voluptatum minima ex recusandae in. Eos veritatis tempora quod, laborum obcaecati dolore ex atque iste omnis, asperiores quasi quibusdam unde, corrupti repudiandae? Dicta asperiores officiis unde ab laborum maxime sed natus, vero eaque reiciendis exercitationem quos, nostrum nisi voluptates veritatis adipisci! Repellendus, fugiat? Cupiditate quisquam iste rerum corrupti illo, doloribus nostrum deleniti repellendus totam laborum obcaecati magni atque numquam inventore dicta enim quia sit corporis voluptates possimus voluptate maiores. Mollitia deserunt quidem impedit. Dolorum modi totam veritatis odio ad dolor quidem omnis natus, sequi, ipsum atque. Consequuntur dolore ea molestias, esse autem officia alias repudiandae omnis soluta obcaecati! Fugiat aut itaque, debitis ad ratione optio quod reiciendis nihil id dignissimos vero ex voluptas quam ipsa eum laborum amet! Doloremque, esse ea enim odio hic vel dignissimos at eum optio numquam, fugit atque laboriosam repudiandae laudantium exercitationem error itaque. Ea delectus nulla labore cum possimus! Quasi, vel dolore aperiam sint praesentium saepe cupiditate magnam mollitia illum fugiat obcaecati! Ullam molestias ipsum in rem laudantium suscipit, blanditiis maiores necessitatibus possimus vero. Nisi assumenda magni ex beatae non quod consectetur commodi quas nobis, error placeat. Corrupti libero alias laboriosam sunt vel ipsum asperiores consectetur praesentium, earum provident! Repudiandae nemo enim, temporibus facilis, modi amet qui aut natus consequatur quas ipsum et aliquam minus quisquam sequi itaque? Ducimus accusantium, voluptate iusto ullam libero eligendi sapiente soluta iure commodi eaque nihil laudantium atque sed, quas assumenda perspiciatis. Impedit, doloribus. Similique.
        </div>
        </div>
  )
}

export default About