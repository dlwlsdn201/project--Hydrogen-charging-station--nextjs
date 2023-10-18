import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TChartData, TOptions } from '@app/types/charts';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ModuleBar = ({ title, data }: { title: string; data: TChartData }) => {
  const options: TOptions = {
    // type: 'bar',
    responsive: true,
    scales: {
      x: {
        ticks: {
          font: { size: 18 },
        },
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 18,
          },
        },
      },
      title: {
        display: true,
        text: title,
        fullSize: true,
        font: {
          size: 24,
        },
      },
    },
    animation: {
      duration: 1500,
      easing: 'easeInQuad',
      loop: false,
    },
  };
  return <Bar options={options} data={data} />;
};

export default ModuleBar;
