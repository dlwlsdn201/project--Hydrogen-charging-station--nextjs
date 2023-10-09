import ModuleBar from '@app/components/Charts/Bar';
import {TChartData} from '@app/types/charts';
import React from 'react';

interface IProps {
  chartData: TChartData;
}

const ChartPriceStatus = (props:IProps) => {
  const {chartData} = props;
  return (
    <ModuleBar title="월별 평균 수소충전소 판매가격 현황" data={chartData} />
  );
};

export default ChartPriceStatus;