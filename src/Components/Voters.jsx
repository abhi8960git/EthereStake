import React from 'react'

const Voters = () => {
  const voters = [
    {
      voter: '0x1234567890abcdef',
      timestamp: 1654321000,
      choosen: true,
    },
    {
      voter: '0xabcdef1234567890',
      timestamp: 1654322000,
      choosen: false,
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
    <div className="flex flex-col p-8">
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
            <table className="min-w-full">
              <thead className="border-b dark:border-gray-500">
                <tr>
                  <th className="text-sm font-medium px-6 py-4 text-left">Voter</th>
                  <th className="text-sm font-medium px-6 py-4 text-left">Voted</th>
                  <th className="text-sm font-medium px-6 py-4 text-left">Vote</th>
                </tr>
              </thead>
              <tbody>
                {voters.map((voter, i) => (
                  <tr
                    key={i}
                    className="border-b dark:border-gray-500 transition duration-300 ease-in-out"
                  >
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-row justify-start items-center space-x-3">
                        {voter.voter}
                      </div>
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      {voter.timestamp}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      {voter.choosen ? (
                        <button className="border-2 rounded-full px-6 py-2.5 border-blue-600
                          text-blue-600 font-medium text-xs leading-tight
                          uppercase hover:border-blue-700 focus:border-blue-700
                          focus:outline-none focus:ring-0 active:border-blue-800
                          transition duration-150 ease-in-out"
                        >
                          Accepted
                        </button>
                      ) : (
                        <button className="border-2 rounded-full px-6 py-2.5 border-red-600
                          text-red-600 font-medium text-xs leading-tight
                          uppercase hover:border-red-700 focus:border-red-700
                          focus:outline-none focus:ring-0 active:border-red-800
                          transition duration-150 ease-in-out"
                        >
                          Rejected
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        {voters.length >= 10 ? (
          <button
            aria-current="page"
            className="rounded-full px-6 py-2.5 bg-blue-600
            font-medium text-xs leading-tight
            uppercase hover:bg-blue-700 focus:bg-blue-700
            focus:outline-none focus:ring-0 active:bg-blue-800
            transition duration-150 ease-in-out dark:text-gray-300
            dark:border dark:border-gray-500 dark:bg-transparent"
          >
            Load More
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Voters;
