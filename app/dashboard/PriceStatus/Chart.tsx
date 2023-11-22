import ModuleBar from '@app/components/Charts/Bar';
import { TChartData } from '@app/types/charts';
import dayjs from 'dayjs';
import React from 'react';
import Filter from './FIlter';

interface IProps {
  chartData: TChartData;
}

const ChartPriceStatus = (props: IProps) => {
  const { chartData } = props;
  return (
    <div className="flex">
      <ModuleBar title={`${dayjs().month() + 1}월 수소충전소 판매 가격 현황`} data={chartData} />
      <Filter />
    </div>
  );
};

export default ChartPriceStatus;
