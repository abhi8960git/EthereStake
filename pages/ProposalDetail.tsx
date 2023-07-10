import Charts from '@/components/Charts'
import React from 'react'
import Image from 'next/image'
import img from '../public/13785126_5362173.svg'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const ProposalDetail = () => {
  return (
    <main className={`flex max-h-screen w-full  flex-col overflow-hidden justify-center items-center  min-h-screen  ${inter.className} `}>
      <h1 className='text-white'>Proposal name</h1>
      <div className='w-full grid grid-cols-2 gap-6 mx-10  justify-evenly items-center '>
        <div className='md:col-span-1 col-span-2 items-center justify-center'>
          <Charts />
        </div>
        <div className='md:col-span-1 hidden md:grid items-center justify-center'>
          <Image src={img} width={600} height={600} alt='good' />
        </div>

      </div>
    </main>
  )
}

export default ProposalDetail