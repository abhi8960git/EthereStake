import React from 'react'
import { GrView } from 'react-icons/gr'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { LiaEthereum } from 'react-icons/lia'

const Table = () => {
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
                    <tr className='text-slate-200s'>

                        <td> Zinzu Chan Lee</td>
                        <td> Seoul </td>
                        <td> 17 Dec, 2022 </td>
                        <td>
                            <div className="flex gap-4 items-center justify-center">
                                <button className="bg-indigo-400 p-2 rounded-md hover:bg-indigo-600 ">
                                    <GrView />
                                </button>
                                <button className="bg-indigo-400 p-2 rounded-md hover:bg-indigo-600 ">
                                    <IoMdCheckmarkCircleOutline />
                                </button>
                                <button className="bg-indigo-400 p-2 rounded-md hover:bg-indigo-600 ">
                                    <LiaEthereum />
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className='text-slate-200s'>

                        <td> Zinzu Chan Lee</td>
                        <td> Seoul </td>
                        <td> 17 Dec, 2022 </td>
                        <td>
                            <div className="flex gap-4 items-center justify-center">
                                <button className="bg-indigo-400 p-2 rounded-md hover:bg-indigo-600 ">
                                    <GrView />
                                </button>
                                <button className="bg-indigo-400 p-2 rounded-md hover:bg-indigo-600 ">
                                    <IoMdCheckmarkCircleOutline />
                                </button>
                                <button className="bg-indigo-400 p-2 rounded-md hover:bg-indigo-600 ">
                                    <LiaEthereum />
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className='text-slate-200s'>

                        <td> Zinzu Chan Lee</td>
                        <td> Seoul </td>
                        <td> 17 Dec, 2022 </td>
                        <td>
                            <div className="flex gap-4 items-center justify-center">
                                <button className="bg-indigo-400 p-2 rounded-md hover:bg-indigo-600 ">
                                    <GrView />
                                </button>
                                <button className="bg-indigo-400 p-2 rounded-md hover:bg-indigo-600 ">
                                    <IoMdCheckmarkCircleOutline />
                                </button>
                                <button className="bg-indigo-400 p-2 rounded-md hover:bg-indigo-600 ">
                                    <LiaEthereum />
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className='text-slate-200s'>

                        <td> Zinzu Chan Lee</td>
                        <td> Seoul </td>
                        <td> 17 Dec, 2022 </td>
                        <td>
                            <div className="flex gap-4 items-center justify-center">
                                <button className="bg-indigo-400 p-2 rounded-md hover:bg-indigo-600 ">
                                    <GrView />
                                </button>
                                <button className="bg-indigo-400 p-2 rounded-md hover:bg-indigo-600 ">
                                    <IoMdCheckmarkCircleOutline />
                                </button>
                                <button className="bg-indigo-400 p-2 rounded-md hover:bg-indigo-600 ">
                                    <LiaEthereum />
                                </button>
                            </div>
                        </td>
                    </tr>


                </tbody>
            </table>
        </section>

    )
}

export default Table