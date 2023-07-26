import React from 'react'
import Table from './Table'
const Proposals = () => {
  return (
<div>
    {/* <div className='flex justify-center text-2xl font-[700] mt-12 text-white'>
        <button className='border-2  border-indigo-500 w-[5em] h-[2em] rounded-l-full border-r-0 bg-indigo-500'>All</button>
        <button className='border-2 border-indigo-500 w-[5em] h-[2em] hover:bg-indigo-500'>Opened</button>
        <button className='border-2 border-indigo-500 w-[5em] h-[2em] rounded-r-full border-l-0 hover:bg-indigo-500'>Closed</button>
    </div> */}
    <div className='mt-8'>
      <Table/>
    </div>
</div>
  )
}

export default Proposals