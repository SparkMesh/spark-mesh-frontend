import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import HomeUI from '@/components/HomeUI'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
 
  return (
    <main>
      <Head>
        <title>SparkMesh</title>
        <meta name="description" content="Welcome to Spark Mesh, a dynamic software company that delivers cutting-edge technology solutions to businesses worldwide. At Spark Mesh, we strive to ignite innovation and enable businesses to thrive in the digital age." />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <TransitionEffect/>
      <HomeUI />
      
    </main>
  )
}
