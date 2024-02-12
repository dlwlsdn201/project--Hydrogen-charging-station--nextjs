import ModuleBar from '@app/components/Charts/Bar';
import { formatPxToNumber } from '@app/components/Modules/Handlers';
import { FlexCenterWrapper } from '@app/components/Modules/StyleComponents';
import config from '@app/tailwind.config';
import { TChartData } from '@app/types/charts';
import React from 'react';
import { Config } from 'tailwindcss';

interface IProps {
  chartData: TChartData;
  titleSize?: number;
}

const ChartRegStatus = (props: IProps) => {
  const { chartData, titleSize } = props;
  return (
    <div className="flex w-[100%] h-[50%] flex-[0.45] justify-center flex-col">
      <FlexCenterWrapper titleSize={titleSize}>2023.07 수소 전기차 등록 현황</FlexCenterWrapper>
      <ModuleBar data={chartData} />
    </div>
  );
};

export default ChartRegStatus;
