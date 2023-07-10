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
dotenv.config();

const address = "0x7C97EBc2Cf0d17d667FC9F9992104Cb17e00d96c"



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [contract, setContract] = useState([])

  console.log(address);
  // console.log(Web3Modal)
  // console.log(abi.abi)
  // console.log(contract);

  const fetchContract = (signerOrProvider: any) =>
    new ethers.Contract(address, abi.abi, signerOrProvider)
  const getEthereumContract = async () => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);
      // return contract;
      // setContract(contract)
      console.log("this is", contract)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEthereumContract()

  }, [])



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
