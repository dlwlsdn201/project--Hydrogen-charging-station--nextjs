import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TChartData, TOptions } from '@app/types/charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import config from '@app/tailwind.config';
import { Config } from 'tailwindcss';
import { formatPxToNumber } from '../Modules/Handlers';

ChartJS.register(CategoryScale, LinearScale, ChartDataLabels, BarElement, Title, Tooltip, Legend);
const getOptions = ({ dataLabelSize, tickLabelSize }: { dataLabelSize: number; tickLabelSize: number }): TOptions => ({
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
        font: { size: tickLabelSize },
        padding: 0,
        backdropPadding: 0,
        autoSkip: false, // width 에 따라 적절한 수량만큼만 x tick label 을 보여줄지에 대한 여부
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
          size: dataLabelSize,
        },
      },
    },
    // title: {
    //   display: true,
    //   text: title,
    //   fullSize: true,
    //   font: {
    //     size: titleSize,
    //   },
    //   position: 'top',
    // },
    datalabels: {
      // 차트 그래프 값을 text label 로 출력
      color: '#FFF',
      align: 'center',
      font: {
        size: dataLabelSize,
      },
      formatter: (value: any) => value?.toLocaleString() ?? value,
    },
  },
  animation: {
    duration: 1500,
    easing: 'easeInQuad',
    loop: false,
  },
});

const ModuleBar = ({ data }: { data: TChartData }) => {
  // const chartLabel = document.querySelector('.chart-label');
  const initialOptions = getOptions({ dataLabelSize: 14, tickLabelSize: 16 });
  const [options, setOptions] = useState(initialOptions);

  const setFontSize = useCallback(() => {
    const {
      theme: { screens },
    }: Config | any = config;
    let dataLabelSize, tickLabelSize;

    const windowWidth = window?.innerWidth;
    const breakPoints = {
      mobile: formatPxToNumber(screens['tablet-sm']),
      tablet: formatPxToNumber(screens['laptop']),
      laptop: formatPxToNumber(screens['desktop']),
    };
    if (windowWidth < breakPoints.mobile) {
      dataLabelSize = 6;
      tickLabelSize = 6;
    } else if (windowWidth < breakPoints.tablet) {
      dataLabelSize = 10;
      tickLabelSize = 12;
    } else {
      dataLabelSize = 14;
      tickLabelSize = 16;
    }
    const nextOptions = getOptions({ dataLabelSize, tickLabelSize });
    setOptions(nextOptions);
  }, []);

  // 페이지 로드 및 창 크기 변경 이벤트에 반응하여 폰트 크기 조절
  if (typeof window !== 'undefined') {
    window.addEventListener('load', setFontSize);
    window.addEventListener('resize', setFontSize);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('load', setFontSize);
      window.removeEventListener('resize', setFontSize);
    }
  }, [options, setFontSize]);

  useEffect(() => {
    setFontSize();
  }, []);
  return (
    <div className="flex h-[100%] w-[100%]">
      <Bar options={options} data={data} />
    </div>
  );
};

export default ModuleBar;
