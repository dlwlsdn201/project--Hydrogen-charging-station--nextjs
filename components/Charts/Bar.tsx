import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TChartData, TOptions } from '@app/types/charts';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ModuleBar = ({ title, data }: { title: string; data: TChartData }) => {
  const options: TOptions = {
    // type: 'bar',
    // responsive: true,
    // maintainAspectRatio: true,
    elements: {
      bar: {
        borderWidth: 1,
        inflateAmount: 0,
      },
    },
    layout: {
      // padding: 4,
      autoPadding: true,
    },
    interaction: {
      intersect: true,
      mode: 'index',
    },
    scales: {
      x: {
        ticks: {
          font: { size: 18 },
        },
        stacked: true,
      },
      y: {
        stacked: true,
        suggestedMin: 50,
        suggestedMax: 10000,
        grid: {
          display: true,
        },
        ticks: {
          major: {
            enabled: true,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: title,
        // fullSize: true,
        font: {
          size: 20,
        },
      },
    },
    animation: {
      duration: 1500,
      easing: 'easeInQuad',
      loop: false,
    },
  };
  return (
    <div className="flex flex-[0.8] h-min">
      <Bar options={options} data={data} />
    </div>
  );
};

export default ModuleBar;
