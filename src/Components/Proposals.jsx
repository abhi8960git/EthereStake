import React from 'react'

import {Link} from 'react-router-dom';


const Proposals = () => {

    const proposals = [
        {
          id: 1,
          proposer: 'John Doe',
          title: 'Sample Proposal 1',
          duration: '1654321',
          upvotes: 10,
          downvotes: 5,
          paid: false
        },
        {
          id: 2,
          proposer: 'Jane Smith',
          title: 'Sample Proposal 2',
          duration: '1754321',
          upvotes: 15,
          downvotes: 2,
          paid: true
        },
       
      ];


    const deactive = `bg-transparent
    text-orange-600 font-medium text-xs leading-tight
    uppercase hover:bg-orange-700 focus:bg-orange-700
    focus:outline-none focus:ring-0 active:bg-orange-600
    transition duration-150 ease-in-out overflow-hidden
    border border-orange-600 hover:text-white focus:text-white`

    const active = `bg-orange-600
    text-white font-medium text-xs leading-tight
    uppercase hover:bg-orange-700 focus:bg-orange-700
    focus:outline-none focus:ring-0 active:bg-orange-800
    transition duration-150 ease-in-out overflow-hidden
    border border-orange-600`

    return (
        <div className='flex flex-col p-8'>
            <div className="flex flex-row justify-center items-center" role="group">

                <button
                    aria-current="page"
                    className={`rounded-l-[5px] px-6 py-2.5 ${active}`}
                >
                    All
                </button>
                <button
                    aria-current="page"
                    className={`px-6 py-2.5 ${deactive}`}
                >
                    Open
                </button>
                <button
                    aria-current="page"
                    className={`rounded-r-[5px] px-6 py-2.5 ${deactive}`}
                >
                    Closed
                </button>

            </div>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="h-[calc(100vh_-_20rem)] overflow-y-auto shadow-md rounded-md">
                        <table className='min-w-full'>
                            <thead className='border-b dark:border-orange-500'>
                                <tr>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium px-6 py-4 text-left"
                                    >
                                        Created By
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium px-6 py-4 text-left"
                                    >
                                        Title
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium px-6 py-4 text-left"
                                    >
                                        Expires
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium px-6 py-4 text-left"
                                    >
                                        Action
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                        {
                            proposals.map((proposal)=>(
                                <tr>
                                    {/* key ={proposal.id} */}
                                    <td>
                                        {/* Identicon */}
                                        <span>
                                            {proposal.proposer}
                                        </span>
                                    </td>
                                    <td>
                                        {proposal.title.substring(0,70) + '...'}
                                    </td>
                                    <td>
                                        {proposal.duration}
                                    </td>
                                    <td>
                                        {/* link */}
                                       <button
                                       className='dark:border rounded-full px-6 py-2.5 dark:border-orange-600
                                       dark:text-orange-600 dark:bg-transparent font-medium text-xs leading-tight
                                       uppercase hover:border-orange-700 focus:border-orange-700
                                       focus:outline-none focus:ring-0 active:border-orange-800
                                       transition duration-150 ease-in-out text-white bg-orange-600'
                                       >
                                                View

                                       </button>

                                       {
                                        // yhn bcha h kuch time wala kaam
                                        proposal.upvotes > proposal.downvotes ? (
                                                !proposal.paid ?(
                                                    <button
                                                    className="dark:border rounded-full px-6 py-2.5 dark:border-red-600
                                                      dark:text-red-600 dark:bg-transparent font-medium text-xs leading-tight
                                                      uppercase hover:border-red-700 focus:border-red-700
                                                      focus:outline-none focus:ring-0 active:border-red-800
                                                      transition duration-150 ease-in-out text-white bg-red-600"
                                                      
                                                  >
                                                    Payout
                                                  </button>
                                                ):(
                                                    <button
                                                    className="dark:border rounded-full px-6 py-2.5 dark:border-green-600
                                                        dark:text-green-600 dark:bg-transparent font-medium text-xs leading-tight
                                                        uppercase hover:border-green-700 focus:border-green-700
                                                        focus:outline-none focus:ring-0 active:border-green-800
                                                        transition duration-150 ease-in-out text-white bg-green-600"
                                                  >
                                                    Paid
                                                  </button>
                                                )
                                        ):(
                                            <button
                                            className="dark:border rounded-full px-6 py-2.5 dark:border-red-600
                                                dark:text-red-600 dark:bg-transparent font-medium text-xs leading-tight
                                                uppercase hover:border-red-700 focus:border-red-700
                                                focus:outline-none focus:ring-0 active:border-red-800
                                                transition duration-150 ease-in-out text-white bg-red-600"
                                          >
                                            Rejected
                                          </button>
                                        )
                                       }
                                    </td>
                                </tr>
                              
                            ))
                        }
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Proposals