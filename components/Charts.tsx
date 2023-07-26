import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { RootState } from '@/utils/interfaces';

const BarChart = () => {
  
  const {isStakeholder,proposals} =  useSelector((state:RootState)=> state.globalStates)
  console.log(proposals);

  const router = useRouter();
  const { id }:any = router.query;


  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

console.log(Number(proposals[id].upvotes))

const upvotes = proposals[id].upvotes;
const downvotes = proposals[id].downvotes;

  useEffect(() => {
    setChartData({
        labels: ['UpVotes', 'DownVotes'],
        datasets: [
          // @ts-ignore
            {
                label: 'Votes',
                data: [`${upvotes}`,`${downvotes}` ],
                borderColor: '#3F51B5',
                backgroundColor: '#3F51B5',
              }
        ]
    })
    setChartOptions({
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                // text: `${proposals[id].description}`
            }
        },
        scales: {
            y: {
              ticks: {
                color: 'white', 
              },
              grid: {
                color: 'white', // Change the color of the axis here
              },
            },
            x: {
                ticks: {
                  color: 'white', 
                },
                grid: {
                color: 'white', // Change the color of the axis here
              },
              },
              
          },
        maintainAspectRatio: false,
        responsive: true
    })
  }, [])

  return (
    <>
      <div className=' md:col-span-2 m-10  lg:h-[70vh] h-[50vh]  p-4 border-2 border-indigo-500 rounded-lg bg-transparent text-white'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
