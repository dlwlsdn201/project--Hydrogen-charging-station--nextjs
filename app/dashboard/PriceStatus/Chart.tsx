import ModuleBar from '@app/components/Charts/Bar';
import dayjs from 'dayjs';
import React from 'react';
import Filter from './Filter';

interface IProps {
  chartData: any;
}

const ChartPriceStatus = (props: IProps) => {
  const { chartData } = props;

  return (
    <div className=" flex w-[100%] flex-[0.45]">
      <ModuleBar title={`${dayjs().month() + 1}월 수소충전소 판매 가격 현황`} data={chartData} />
      <Filter />
    </div>
  );
};

export default ChartPriceStatus;
