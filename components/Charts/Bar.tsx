import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TChartData, TOptions } from '@app/types/charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, ChartDataLabels, BarElement, Title, Tooltip, Legend);

const ModuleBar = ({ title, data }: { title: string; data: TChartData }) => {
  const options: TOptions = {
    // type: 'bar',
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      bar: {
        borderWidth: 1,
        inflateAmount: 2,
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
          font: { size: 16 },
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
          usePointStyle: false,
          font: {
            size: 14,
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
        position: 'top',
      },
      datalabels: {
        // 차트 그래프 값을 text label 로 출력
        color: '#FFF',
        align: 'center',
        formatter: (value: any) => value?.toLocaleString() ?? value,
      },
    },
    animation: {
      duration: 1500,
      easing: 'easeInQuad',
      loop: false,
    },
  };
  return (
    <div className="flex h-[100%] w-[100%]">
      <Bar options={options} data={data} />
    </div>
  );
};

export default ModuleBar;
