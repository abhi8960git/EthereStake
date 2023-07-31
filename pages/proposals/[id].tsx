import Charts from '@/components/Charts'
import React from 'react'
import Image from 'next/image'
import img from '../../public/13785126_5362173.svg'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { RootState } from '@/utils/interfaces'
import {useSelector} from 'react-redux';
import {useRouter} from 'next/router';
import { voteOnProposal } from '@/services/blockchain'
const ProposalDetail = () => {

  const {isStakeholder,proposals} =  useSelector((state:RootState)=> state.globalStates)
  console.log(proposals);

  const router = useRouter();
  const { id }:any = router.query;
  // console.log( 'this is my id',id);

  return (
    <main className={`flex max-h-screen w-full  flex-col overflow-hidden justify-center items-center  min-h-screen  ${inter.className} `}>
      <h1 className='text-white'>{proposals[id]?.title}</h1>
      <div className='w-full grid grid-cols-2 gap-6 mx-10  justify-evenly items-center '>
        <div className='md:col-span-1 col-span-2 items-center justify-center'>
          <Charts />
          <div className='flex justify-evenly items-center'>
          <button className='text-white bg-indigo-500 p-2 px-4 rounded-lg shadow-lg hover:bg-indigo-400 transition' onClick={()=>voteOnProposal(id, true)}>Accept</button>
          <button className='text-white bg-indigo-500 p-2 px-4 rounded-lg shadow-lg hover:bg-indigo-400 transition' onClick={()=>voteOnProposal(id, true)}>Reject</button>
        </div>
        </div>
       
        <div className='md:col-span-1 hidden md:grid items-center justify-center'>
          <Image src={img} width={600} height={600} alt='good' />
        </div>

      </div>
    </main>
  )
}

export default ProposalDetail