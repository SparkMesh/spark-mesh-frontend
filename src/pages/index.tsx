import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import HomeUI from '@/components/HomeUI'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
 
  return (
    <main >
      <HomeUI />
      
    </main>
  )
}
