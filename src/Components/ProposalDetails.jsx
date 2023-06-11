import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from 'recharts';

const ProposalDetails = () => {
  const { id } = useParams();
  const notify = () => toast.success('Wow so easy!');

  const proposal = {
    id: '123',
    title: 'Sample Proposal',
    amount: '2',
    upvotes: 10,
    downvotes: 5,
    duration: '167956800', // 5 days in seconds
    description: 'This is a sample proposal description.',
  };

  const data = [
    {
      name: 'Voters',
      Acceptees: 20,
      Rejectees: 10,
    },
  ];

  return (
    <div className="flex flex-col items-center p-7">
      <h2 className="font-semibold text-3xl mb-5 border border-2 border-orange-500 inline p-2 rounded-[5px]">
        {proposal?.title}
      </h2>

      <p className="mt-7 border-2 p-2 border-orange-500 w-full border-x-0">
        {proposal?.description}
      </p>

      <div className="flex flex-col items-center w-full mt-4 overflow-auto">
        <BarChart width={500} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Acceptees" fill="#2563eb" />
          <Bar dataKey="Rejectees" fill="#dc2626" />
        </BarChart>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-3 items-center space-y-3 mt-4">
        {true ? (
          <>
            <button
              type="button"
              className="px-6 py-2.5
              bg-orange-600 text-white font-medium text-xs
              leading-tight uppercase rounded-[5px] shadow-md
              hover:bg-orange-700 hover:shadow-lg focus:bg-green-700
              focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-orange-800 active:shadow-lg transition
              duration-150 ease-in-out dark:text-blue-500
              dark:border dark:border-orange-500 dark:bg-transparent"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              // onClick={() => onVote(true)}
            >
              Accept
            </button>
            <button
              type="button"
              className="px-6 py-2.5 mt-0
              bg-orange-600 text-blue-500 font-medium text-xs
              leading-tight uppercase rounded-[5px] shadow-md
              hover:bg-orange-700 hover:shadow-lg focus:bg-red-700
              focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-orange-800 active:shadow-lg transition
              duration-150 ease-in-out
              dark:border dark:border-orange-500 dark:bg-transparent"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              // onClick={() => onVote(false)}
              style={{marginTop:0}}
            >
              Reject
            </button>
          </>
        ) : null}
      </div>
      </div>
  
  );
};

export default ProposalDetails;
