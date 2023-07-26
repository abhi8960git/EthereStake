import React from 'react'
import { GrView } from 'react-icons/gr'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { LiaEthereum } from 'react-icons/lia'
import { useSelector } from 'react-redux'
import { RootState } from '@/utils/interfaces'
import { daysRemaining, truncate } from '@/utils/helper'
import { payOutBeneficiary, toWei } from '@/services/blockchain'
import Link from 'next/link'
import { FcCancel } from 'react-icons/fc'

const Table = () => {
    const { proposals } = useSelector((state: RootState) => state.globalStates)



    return (

        <section className="table__body">
            <table>
                <thead>
                    <tr>

                        <th> Created by </th>
                        <th> Title </th>
                        <th> Expired on</th>
                        <th className='action'> Action </th>

                    </tr>
                </thead>
                <tbody className='text-white'>
                    {
                        proposals.map((proposals, key) =>
                            <tr className='text-slate-200s' key={proposals.id}> 

                                <td>{truncate({ text: proposals.proposer, startChars: 4, endChars: 4, maxLength: 11 })}</td>
                                <td> {truncate({ text: proposals.title, startChars: 4, endChars: 4, maxLength: 11 })} </td>
                                <td> {new Date().getTime() > Number(parseInt(proposals.duration._hex, 16) + "000") ? "Expired" : daysRemaining(parseInt(proposals.duration._hex, 16))} </td>
                                <td>
                                    <div className="flex gap-4 items-center justify-center">
                                        <button className="bg-indigo-400 p-2 rounded-md hover:bg-indigo-600 ">
                                            <Link href={`/proposals/${proposals.id}`}>
                                                <GrView />
                                            </Link>
                                        </button>

                                        {
                                            new Date().getTime() > Number(proposals.duration) ? (

                                                Number(proposals.upvotes) > Number(proposals.downvotes) ? (
                                                    !proposals.paid ? (
                                                        <button className="bg-indigo-400 p-2 rounded-md hover:bg-indigo-600 " onClick={()=>payOutBeneficiary(proposals.id)}>
                                                            <LiaEthereum />
                                                        </button>
                                                    ) : (
                                                        <button className="bg-indigo-400 p-2 rounded-md hover:bg-indigo-600 ">
                                                            <IoMdCheckmarkCircleOutline />
                                                        </button>
                                                    )
                                                ) : (
                                                    <button className="bg-indigo-400 p-2 rounded-md hover:bg-indigo-600 ">
                                                        <FcCancel />
                                                    </button>
                                                )

                                            ) : null
                                        }


                                    </div>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </section>

    )
}

export default Table