import React, { useState } from 'react'

const Banner = () => {
    const [amount, setAmount] = useState('');
    var opened = 2;
    const stakeholder = false;
    return (
        <div className='p-3 '>
            <hr className="my-3 border-gray-300 dark:border-orange-500" />


            <p className='font-[600] text-2xl '>
                {/* isStakeHodler */}
                {
                stakeholder ? (
                        'Raise Proposals on EthereStake'
                    ) : (
                        'Contribute 1 Matic, become a powerful stakeholder'
                    )
                }
            </p>

            <div className='flex justify-center items-center'>
                <div>
                    <input
                        type='number'

                        className='form-control block  px-3 py-1.5 mb-[-15px] mr-[10px]
        text-base font-normaltext-gray-700
        bg-clip-padding border border-solid border-orange-300
        rounded transition ease-in-out m-0 shadow-md
        focus:text-orange-500 focus:outline-none
        dark:border-orange-500 dark:bg-transparent '
                        placeholder='1 MATIC'
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    >
                    </input>
                </div>



                <div
                    className="flex flex-row justify-start items-center space-x-3 mt-4"
                    role="group"
                >
                    <button
                        type="button"
                        className={`inline-block px-6 py-2.5 
          bg-orange-600 text-white font-medium text-xs
          leading-tight uppercase shadow-md rounded-[5px]
          hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700
          focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-orange-800 active:shadow-lg transition
          duration-150 ease-in-out dark:text-orange-500
          dark:border dark:border-orange-500 dark:bg-transparent`}
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                    //   onClick={onContribute}
                    >
                        Contribute
                    </button>

                    {stakeholder ? (
                        // isStakeHolder
                        <button
                            type="button"
                            className={`inline-block px-6 py-2.5 m-0
            bg-orange-600 text-white font-medium text-xs
            leading-tight uppercase shadow-md rounded-[5px]
            hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700
            focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-orange-800 active:shadow-lg transition
            duration-150 ease-in-out dark:text-orange-500
            dark:border dark:border-orange-500 dark:bg-transparent`}
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        // onClick={onPropose}
                        >
                            Propose
                        </button>
                    ) : null}
                </div>



            </div>




            <hr className="my-3 mb-6 border-gray-300 dark:border-orange-500" />

            <h2 className='font-semibold text-2xl mb-5 border border-solid border-2 dark:border-orange-600 rounded-[5px] p-2 px-4  w-full inline '>
                Currently Proposal{opened == 1 ? '' : 's'} Opened : {opened}
            </h2>

        </div>
    )
}

export default Banner