import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import { ethers } from 'ethers'
import Hero from '@/components/Hero'
import Web3Modal from 'web3modal'
import abi from "../artifacts/abi.json"
import dotenv from 'dotenv';
import Proposals from '@/components/Proposals'
import img from '../public/6450149_3060323.svg'
import Navbar from '@/components/navbar/Navbar'
import Charts from '@/components/Charts'
import 'react-toastify/dist/ReactToastify.css';
import { checkWallet, getInfo, GetProposals } from '@/services/blockchain'
dotenv.config();





const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const Refresh=async()=>{
    await checkWallet()
    getInfo()
   const good= await GetProposals()
   console.log( typeof good)
  }

  useEffect(()=>{},[
    Refresh()
  ])

  return (

    <main
      className={`flex max-h-screen flex-col overflow-hidden  min-h-screen    ${inter.className}`}
    >
      <Navbar />

      <div className='w-full grid grid-cols-2 gap-6 items-center margin-auto'>
        <div className='md:col-span-1 col-span-2 items-center justify-center'>
          <Hero />
          <Proposals />
        =
        </div>
        <div className='md:col-span-1 hidden md:grid items-center justify-center'>
          <Image src={img} width={700} height={700} alt='good' />
        </div>

      </div>

    </main>
  )
}
