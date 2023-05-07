import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Logo from './Logo'
import linkedin from '../assets/linkedin.svg'
import { useRouter } from 'next/router'
import { SocialIcon } from 'react-social-icons'
type Props = {}
const CustomLink = ({ href, title, className ='' }: { href: string,title:string, className: string }) => {   
  const router = useRouter()
   
  
  return (
    <Link href={href} className={`${className} relative group`}>{title}
    <span className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}></span>
    </Link>)}

const NavBar = ({}: Props) => {
  
  return (
    <header className='w-full px-32 py-8 font-medium flex justify-between'>
      <nav>
        <CustomLink className='mr-4' href='/' title='Home'/>
        
        
        <CustomLink className='mx-4' href='/about' title='About'></CustomLink>
        <CustomLink className='mx-4' href='/projects' title='Projects'></CustomLink>
        <CustomLink className='ml-4' href='/articles' title='Article'></CustomLink>

      </nav>
      <Logo/>
      
      <nav className='flex flex-row gap-4'>
        
        
        
      <SocialIcon style={{ height: 30, width: 30 }} className='hover:scale-125 transition focus:scale-75' network='linkedin' target='_blank' url="https://www.linkedin.com/company/spark-mesh" />
      
      <SocialIcon style={{ height: 30, width: 30 }} className='hover:scale-125 transition focus:scale-75' network='github' target='_blank' url="https://github.com/SparkMesh" />
      <SocialIcon style={{ height: 30, width: 30 }} className='hover:scale-125 transition focus:scale-75' network='discord' target='_blank' url="https://discord.gg/UEd3NdFGdT" />
      </nav>
    </header>
  )
}

export default NavBar