import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
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
      
      <nav>
        <Link href='/' target={'_blank'}>T</Link>
        <Link href='/' target={'_blank'}>T</Link>
        <Link href='/' target={'_blank'}>T</Link>
        <Link href='/' target={'_blank'}>T</Link>
      </nav>
    </header>
  )
}

export default NavBar