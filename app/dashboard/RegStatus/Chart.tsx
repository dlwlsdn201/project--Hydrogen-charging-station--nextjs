import ModuleBar from '@app/components/Charts/Bar';
import { TChartData } from '@app/types/charts';
import React from 'react';

interface IProps {
  chartData: TChartData;
}

const ChartRegStatus = (props: IProps) => {
  const { chartData } = props;
  return (
    <div className="flex w-[100%] flex-[0.45] justify-center">
      <ModuleBar title="2023.07 수소 전기차 등록 현황" data={chartData} />
    </div>
  );
};

export default ChartRegStatus;
