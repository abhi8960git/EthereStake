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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
        labels: ['UpVotes', 'DownVotes'],
        datasets: [
            {
                label: 'Votes',
                data: [18127, 22201],
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
                text: 'Proposal Detail'
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
