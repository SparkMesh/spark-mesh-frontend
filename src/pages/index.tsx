import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import NavBar from '@/components/NavBar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('scrolling')
    })
  }, [])
  return (
    <main>
      <NavBar />
    </main>
  )
}
